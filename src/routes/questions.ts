import { Router } from "express";
import { QuestionModel, ChapterModel } from "../models";

export const questionsRouter = Router();

questionsRouter.get("/", async (req, res) => {
  const { chapterId } = req.query;
  if (chapterId && typeof chapterId === "string") {
    const filtered = await QuestionModel.find({ chapterId }).lean();
    return res.json(filtered);
  }
  const questions = await QuestionModel.find().lean();
  res.json(questions);
});

questionsRouter.get("/:questionId", async (req, res) => {
  const question = await QuestionModel.findOne({
    id: req.params.questionId,
  }).lean();
  if (!question) {
    return res.status(404).json({ error: "Question not found" });
  }
  res.json(question);
});

questionsRouter.put("/bulk", async (req, res) => {
  const { ids, updates } = req.body ?? {};

  if (!Array.isArray(ids) || ids.length === 0 || !updates || typeof updates !== "object") {
    return res
      .status(400)
      .json({ error: "ids (non-empty array) and updates object are required" });
  }

  const allowed = ["question_type", "title", "options", "answer", "subtitle", "reason", "publish_status"];
  const patch: any = {};
  for (const key of allowed) {
    if (key in updates) {
      patch[key] = updates[key];
    }
  }

  if (Object.keys(patch).length === 0) {
    return res.status(400).json({ error: "No updatable fields provided" });
  }

  const result = await QuestionModel.updateMany({ id: { $in: ids } }, { $set: patch });
  res.json({ matched: result.matchedCount, modified: result.modifiedCount });
});

questionsRouter.post("/", async (req, res) => {
  const {
    id,
    chapterId,
    question_type,
    title,
    options,
    answer,
    subtitle,
    reason,
    publish_status,
  } = req.body ?? {};

  if (!id || !chapterId || !title || !Array.isArray(options) || answer === undefined) {
    return res.status(400).json({
      error: "id, chapterId, title, options[] and answer are required",
    });
  }

  if (options.length < 2) {
    return res
      .status(400)
      .json({ error: "options must contain at least 2 items" });
  }

  if (typeof answer !== "number" || answer < 0 || answer >= options.length) {
    return res.status(400).json({
      error: "answer must be a valid index into options",
    });
  }

  const existing = await QuestionModel.findOne({ id }).lean();
  if (existing) {
    return res
      .status(409)
      .json({ error: "Question with this id already exists" });
  }

  const chapter = await ChapterModel.findOne({ id: chapterId }).lean();
  if (!chapter) {
    return res.status(400).json({ error: "chapterId does not exist" });
  }

  const created = await QuestionModel.create({
    id,
    chapterId,
    question_type: question_type || "mcq",
    title,
    options,
    answer,
    subtitle: subtitle || "",
    reason: reason || "",
    publish_status: publish_status || "Draft",
  });

  res.status(201).json(created);
});

questionsRouter.put("/:questionId", async (req, res) => {
  const questionId = req.params.questionId;
  const updates: any = {};
  const allowed = ["chapterId", "question_type", "title", "options", "answer", "subtitle", "reason", "publish_status"];

  for (const key of allowed) {
    if (key in req.body) {
      updates[key] = req.body[key];
    }
  }

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({ error: "No fields to update" });
  }

  const question = await QuestionModel.findOneAndUpdate({ id: questionId }, { $set: updates }, { new: true }).lean();
  if (!question) {
    return res.status(404).json({ error: "Question not found" });
  }

  res.json(question);
});

questionsRouter.delete("/:questionId", async (req, res) => {
  const questionId = req.params.questionId;
  const question = await QuestionModel.findOneAndDelete({ id: questionId }).lean();
  if (!question) {
    return res.status(404).json({ error: "Question not found" });
  }

  res.status(204).end();
});

questionsRouter.post("/:questionId/submit", async (req, res) => {
  const question = await QuestionModel.findOne({
    id: req.params.questionId,
  }).lean() as { answer: number } | null;
  if (!question) {
    return res.status(404).json({ error: "Question not found" });
  }
  const { selectedIndex } = req.body;
  if (typeof selectedIndex !== "number") {
    return res.status(400).json({ error: "selectedIndex (number) is required" });
  }
  const isCorrect = selectedIndex === question.answer;
  res.json({
    isCorrect,
    answer: question.answer,
  });
});
