import "dotenv/config";
import express from "express";
import cors from "cors";
import { subjectsRouter } from "./routes/subjects";
import { chaptersRouter } from "./routes/chapters";
import { questionsRouter } from "./routes/questions";
import { connectDB } from "./db";
import { initDbTables } from "./models";

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
      subjects: "GET /api/subjects",
      subjectById: "GET /api/subjects/:subjectId",
      chapters: "GET /api/chapters",
      chaptersBySubject: "GET /api/chapters?subjectId=:subjectId",
      chapterById: "GET /api/chapters/:chapterId",
      questions: "GET /api/questions",
      questionsByChapter: "GET /api/questions?chapterId=:chapterId",
      questionById: "GET /api/questions/:questionId",
      submitAnswer: "POST /api/questions/:questionId/submit",
    },
  });
});

app.use("/api/subjects", subjectsRouter);
app.use("/api/chapters", chaptersRouter);
app.use("/api/questions", questionsRouter);

async function start() {
  try {
    await connectDB();
    await initDbTables();
    app.listen(PORT, () => {
      console.log(`Quiz API running at http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error("Failed to start server", err);
    process.exit(1);
  }
}

start();
