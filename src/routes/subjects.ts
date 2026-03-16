import { Router } from "express";
import { SubjectModel } from "../models";

export const subjectsRouter = Router();

subjectsRouter.get("/", async (_req, res) => {
  const subjects = await SubjectModel.find().lean();
  res.json(subjects);
});

subjectsRouter.get("/:subjectId", async (req, res) => {
  const subject = await SubjectModel.findOne({ id: req.params.subjectId }).lean();
  if (!subject) {
    return res.status(404).json({ error: "Subject not found" });
  }
  res.json(subject);
});

subjectsRouter.post("/", async (req, res) => {
  const { id, title, description, publish_status, chapters_sequence } = req.body ?? {};

  if (!id || !title) {
    return res.status(400).json({ error: "id and title are required" });
  }

  const existing = await SubjectModel.findOne({ id }).lean();
  if (existing) {
    return res.status(409).json({ error: "Subject with this id already exists" });
  }

  const subject = await SubjectModel.create({
    id,
    title,
    description: description ?? "",
    publish_status: publish_status || "Draft",
    chapters_sequence: Array.isArray(chapters_sequence) ? chapters_sequence : [],
  });

  res.status(201).json(subject);
});

subjectsRouter.put("/:subjectId", async (req, res) => {
  const subjectId = req.params.subjectId;
  const updates: any = {};
  const allowed = ["title", "description", "publish_status", "chapters_sequence"];

  for (const key of allowed) {
    if (key in req.body) {
      updates[key] = req.body[key];
    }
  }

  if (Object.keys(updates).length === 0) {
    return res.status(400).json({ error: "No fields to update" });
  }

  const subject = await SubjectModel.findOneAndUpdate({ id: subjectId }, { $set: updates }, { new: true }).lean();
  if (!subject) {
    return res.status(404).json({ error: "Subject not found" });
  }

  res.json(subject);
});

subjectsRouter.delete("/:subjectId", async (req, res) => {
  const subjectId = req.params.subjectId;
  const subject = await SubjectModel.findOneAndDelete({ id: subjectId }).lean();
  if (!subject) {
    return res.status(404).json({ error: "Subject not found" });
  }

  res.status(204).end();
});
