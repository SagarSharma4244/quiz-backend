import mongoose, { Schema, InferSchemaType } from "mongoose";

const SubjectSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    publish_status: {
      type: String,
      enum: ["Draft", "private", "public"],
      default: "Draft",
    },
    chapters_sequence: { type: [String], default: [] },
  },
  { timestamps: false }
);

const ChapterSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    subjectId: { type: String, required: true, index: true },
    title: { type: String, required: true },
    description: { type: String, default: "" },
    publish_status: {
      type: String,
      enum: ["Draft", "private", "public"],
      default: "Draft",
    },
    questions_sequence: { type: [String], default: [] },
    level: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      default: "Easy",
    },
  },
  { timestamps: false }
);

const QuestionSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    chapterId: { type: String, required: true, index: true },
    question_type: {
      type: String,
      enum: ["mcq", "multiple_choice", "drag", "correct_sequence", "match_the_following"],
      default: "mcq",
    },
    title: { type: String, required: true },
    options: { type: [String], required: true },
    answer: { type: Schema.Types.Mixed, required: true },
    subtitle: { type: String, default: "" },
    reason: { type: String, default: "" },
    publish_status: {
      type: String,
      enum: ["Draft", "private", "public", "testing"],
      default: "Draft",
    },
  },
  { timestamps: false }
);

export type SubjectDoc = InferSchemaType<typeof SubjectSchema>;
export type ChapterDoc = InferSchemaType<typeof ChapterSchema>;
export type QuestionDoc = InferSchemaType<typeof QuestionSchema>;

export const SubjectModel =
  mongoose.models.Subject || mongoose.model("Subject", SubjectSchema);
export const ChapterModel =
  mongoose.models.Chapter || mongoose.model("Chapter", ChapterSchema);
export const QuestionModel =
  mongoose.models.Question || mongoose.model("Question", QuestionSchema);

function ignoreNamespaceExists(e: unknown) {
  const maybe = e as { codeName?: string; message?: string };
  if (maybe?.codeName === "NamespaceExists") {
    return;
  }
  throw e;
}

export async function initDbTables() {
  await Promise.all([
    SubjectModel.createCollection().catch(ignoreNamespaceExists),
    ChapterModel.createCollection().catch(ignoreNamespaceExists),
    QuestionModel.createCollection().catch(ignoreNamespaceExists),
  ]);
  await Promise.all([
    SubjectModel.syncIndexes(),
    ChapterModel.syncIndexes(),
    QuestionModel.syncIndexes(),
  ]);
}

