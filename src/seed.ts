import "dotenv/config";
import { connectDB } from "./db";
import {
  subjects,
  chapters,
  questions,
  Subject,
  Chapter,
  Question,
} from "./data";
import { SubjectModel, ChapterModel, QuestionModel } from "./models";

async function seed() {
  await connectDB();

  await SubjectModel.deleteMany({});
  await ChapterModel.deleteMany({});
  await QuestionModel.deleteMany({});

  await SubjectModel.insertMany(subjects as Subject[]);
  await ChapterModel.insertMany(chapters as Chapter[]);
  await QuestionModel.insertMany(questions as Question[]);

  console.log("Seeded MongoDB with subjects, chapters, and questions");
}

seed()
  .then(() => process.exit(0))
  .catch((err) => {
    console.error(err);
    process.exit(1);
  });

