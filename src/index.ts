import "dotenv/config";
import express from "express";
import cors from "cors";
import { sectorsRouter } from "./routes/sectors";
import { topicsRouter } from "./routes/topics";
import { questionsRouter } from "./routes/questions";
import { connectDB } from "./db";

const app = express();
const PORT = process.env.PORT || 3002;

app.use(cors());
app.use(express.json());

app.use((req, _res, next) => {
  console.log(`${req.method} ${req.url}`);
  next();
});

app.get("/", (_req, res) => {
  res.json({
    message: "Quiz API",
    endpoints: {
      sectors: "GET /api/sectors",
      sectorById: "GET /api/sectors/:sectorId",
      topics: "GET /api/topics",
      topicsBySector: "GET /api/topics?sectorId=:sectorId",
      topicById: "GET /api/topics/:topicId",
      questions: "GET /api/questions",
      questionsByTopic: "GET /api/questions?topicId=:topicId",
      questionById: "GET /api/questions/:questionId",
      submitAnswer: "POST /api/questions/:questionId/submit",
    },
  });
});

app.use("/api/sectors", sectorsRouter);
app.use("/api/topics", topicsRouter);
app.use("/api/questions", questionsRouter);

async function start() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Quiz API running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
}

start();
