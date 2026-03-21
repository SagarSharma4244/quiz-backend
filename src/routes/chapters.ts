import { Router } from "express";
import { SubjectModel, ChapterModel } from "../models";

export const chaptersRouter = Router();

chaptersRouter.get("/", async (req, res) => {
  const { subjectId } = req.query;
  if (subjectId && typeof subjectId === "string") {
    const filtered = await ChapterModel.find({ subjectId }).lean();
    return res.json(filtered);
  }
  const chapters = await ChapterModel.find().lean();
  res.json(chapters);
});

chaptersRouter.get("/:chapterId", async (req, res) => {
  const chapter = await ChapterModel.findOne({ id: req.params.chapterId }).lean();
  if (!chapter) {
    return res.status(404).json({ error: "Chapter not found" });
  }
  res.json(chapter);
});

chaptersRouter.put("/:chapterId", async (req, res) => {
  const chapterId = req.params.chapterId;
  const updates: any = {};
  const allowed = ["subjectId", "title", "description", "publish_status", "questions_sequence", "level"];

  for (const key of allowed) {
    if (key in req.body) {
      updates[key] = req.body[key];
    }
  }

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({ error: "No fields to update" });
  }

  const chapter = await ChapterModel.findOneAndUpdate({ id: chapterId }, { $set: updates }, { new: true }).lean();
  if (!chapter) {
    return res.status(404).json({ error: "Chapter not found" });
  }

  res.json(chapter);
});

chaptersRouter.delete("/:chapterId", async (req, res) => {
  const chapterId = req.params.chapterId;
  const chapter = await ChapterModel.findOneAndDelete({ id: chapterId }).lean();
  if (!chapter) {
    return res.status(404).json({ error: "Chapter not found" });
  }

  res.status(204).end();
});

chaptersRouter.post("/bulk", async (req, res) => {
  const { chapters } = req.body ?? {};

  if (!Array.isArray(chapters) || chapters.length === 0) {
    return res.status(400).json({ error: "chapters must be a non-empty array" });
  }

  const subject = await SubjectModel.findOne({ id: chapters[0].subjectId }).lean();
  if (!subject) {
    return res.status(400).json({ error: "subjectId does not exist" });
  }

  const created = [];
  const errors = [];

  for (const ch of chapters) {
    if (!ch.id || !ch.subjectId || !ch.title) {
      errors.push({ chapter: ch.title ?? ch.id, error: "id, subjectId and title are required" });
      continue;
    }
    try {
      const doc = await ChapterModel.create({
        id: ch.id,
        subjectId: ch.subjectId,
        title: ch.title,
        description: ch.description ?? "",
        publish_status: ch.publish_status || "Draft",
        questions_sequence: Array.isArray(ch.questions_sequence) ? ch.questions_sequence : [],
        level: ch.level || "Easy",
      });
      created.push(doc);
    } catch (err: any) {
      errors.push({ chapter: ch.title, error: err.message });
    }
  }

  res.status(201).json({ created, errors });
});

chaptersRouter.post("/", async (req, res) => {
  const { id, subjectId, title, description, publish_status, questions_sequence, level } = req.body ?? {};

  if (!id || !subjectId || !title) {
    return res
      .status(400)
      .json({ error: "id, subjectId and title are required" });
  }

  const existing = await ChapterModel.findOne({ id }).lean();
  if (existing) {
    return res.status(409).json({ error: "Chapter with this id already exists" });
  }

  const subject = await SubjectModel.findOne({ id: subjectId }).lean();
  if (!subject) {
    return res.status(400).json({ error: "subjectId does not exist" });
  }

  const chapter = await ChapterModel.create({
    id,
    subjectId,
    title,
    description: description ?? "",
    publish_status: publish_status || "Draft",
    questions_sequence: Array.isArray(questions_sequence) ? questions_sequence : [],
    level: level || "Easy",
  });
  res.status(201).json(chapter);
});
