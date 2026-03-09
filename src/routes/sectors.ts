import { Router } from "express";
import { SectorModel } from "../models";

export const sectorsRouter = Router();

sectorsRouter.get("/", async (_req, res) => {
  const sectors = await SectorModel.find().lean();
  res.json(sectors);
});

sectorsRouter.get("/:sectorId", async (req, res) => {
  const sector = await SectorModel.findOne({ id: req.params.sectorId }).lean();
  if (!sector) {
    return res.status(404).json({ error: "Sector not found" });
  }
  res.json(sector);
});

sectorsRouter.post("/", async (req, res) => {
  const { id, name } = req.body ?? {};

  if (!id || !name) {
    return res.status(400).json({ error: "id and name are required" });
  }

  const existing = await SectorModel.findOne({ id }).lean();
  if (existing) {
    return res.status(409).json({ error: "Sector with this id already exists" });
  }

  const sector = await SectorModel.create({ id, name });
  res.status(201).json(sector);
});
