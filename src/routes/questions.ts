import { Router } from "express";
import { QuizQuestionModel, TopicModel } from "../models";

export const questionsRouter = Router();

questionsRouter.get("/", async (req, res) => {
  const { topicId } = req.query;
  if (topicId && typeof topicId === "string") {
    const filtered = await QuizQuestionModel.find({ topicId }).lean();
    return res.json(filtered);
  }
  const questions = await QuizQuestionModel.find().lean();
  res.json(questions);
});

questionsRouter.get("/:questionId", async (req, res) => {
  const question = await QuizQuestionModel.findOne({
    id: req.params.questionId,
  }).lean();
  if (!question) {
    return res.status(404).json({ error: "Question not found" });
  }
  res.json(question);
});

questionsRouter.post("/", async (req, res) => {
  const { id, topicId, question, options, correctIndex } = req.body ?? {};

  if (!id || !topicId || !question || !Array.isArray(options)) {
    return res.status(400).json({
      error: "id, topicId, question and options[] are required",
    });
  }

  if (options.length < 2) {
    return res
      .status(400)
      .json({ error: "options must contain at least 2 items" });
  }

  if (
    typeof correctIndex !== "number" ||
    correctIndex < 0 ||
    correctIndex >= options.length
  ) {
    return res.status(400).json({
      error: "correctIndex must be a valid index into options",
    });
  }

  const existing = await QuizQuestionModel.findOne({ id }).lean();
  if (existing) {
    return res
      .status(409)
      .json({ error: "Question with this id already exists" });
  }

  const topic = await TopicModel.findOne({ id: topicId }).lean();
  if (!topic) {
    return res.status(400).json({ error: "topicId does not exist" });
  }

  const created = await QuizQuestionModel.create({
    id,
    topicId,
    question,
    options,
    correctIndex
  });

  res.status(201).json(created);
});

questionsRouter.post("/:questionId/submit", async (req, res) => {
  const question = await QuizQuestionModel.findOne({
    id: req.params.questionId,
  }).lean() as { correctIndex: number } | null;
  if (!question) {
    return res.status(404).json({ error: "Question not found" });
  }
  const { selectedIndex } = req.body;
  if (typeof selectedIndex !== "number") {
    return res.status(400).json({ error: "selectedIndex (number) is required" });
  }
  const isCorrect = selectedIndex === question.correctIndex;
  res.json({
    isCorrect,
    correctIndex: question.correctIndex,
  });
});
