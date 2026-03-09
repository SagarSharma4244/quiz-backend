import { Router } from "express";
import { SectorModel, TopicModel } from "../models";

export const topicsRouter = Router();

topicsRouter.get("/", async (req, res) => {
  const { sectorId } = req.query;
  if (sectorId && typeof sectorId === "string") {
    const filtered = await TopicModel.find({ sectorId }).lean();
    return res.json(filtered);
  }
  const topics = await TopicModel.find().lean();
  res.json(topics);
});

topicsRouter.get("/:topicId", async (req, res) => {
  const topic = await TopicModel.findOne({ id: req.params.topicId }).lean();
  if (!topic) {
    return res.status(404).json({ error: "Topic not found" });
  }
  res.json(topic);
});

topicsRouter.post("/", async (req, res) => {
  const { id, sectorId, name } = req.body ?? {};

  if (!id || !sectorId || !name) {
    return res
      .status(400)
      .json({ error: "id, sectorId and name are required" });
  }

  const existing = await TopicModel.findOne({ id }).lean();
  if (existing) {
    return res.status(409).json({ error: "Topic with this id already exists" });
  }

  const sector = await SectorModel.findOne({ id: sectorId }).lean();
  if (!sector) {
    return res.status(400).json({ error: "sectorId does not exist" });
  }

  const topic = await TopicModel.create({ id, sectorId, name });
  res.status(201).json(topic);
});
