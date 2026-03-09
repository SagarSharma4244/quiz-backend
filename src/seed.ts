import "dotenv/config";
import { connectDB } from "./db";
import {
  sectors,
  topics,
  quizQuestions,
  Sector,
  Topic,
  QuizQuestion,
} from "./data";
import { SectorModel, TopicModel, QuizQuestionModel } from "./models";

async function seed() {
  await connectDB();

  await SectorModel.deleteMany({});
  await TopicModel.deleteMany({});
  await QuizQuestionModel.deleteMany({});

  await SectorModel.insertMany(sectors as Sector[]);
  await TopicModel.insertMany(topics as Topic[]);
  await QuizQuestionModel.insertMany(quizQuestions as QuizQuestion[]);

  console.log("Seeded MongoDB with sectors, topics, and questions");
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

