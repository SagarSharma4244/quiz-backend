import mongoose, { Schema, InferSchemaType } from "mongoose";

const SectorSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
  },
  { timestamps: false }
);

const TopicSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    sectorId: { type: String, required: true, index: true },
    name: { type: String, required: true },
  },
  { timestamps: false }
);

const QuizQuestionSchema = new Schema(
  {
    id: { type: String, required: true, unique: true },
    topicId: { type: String, required: true, index: true },
    question: { type: String, required: true },
    options: { type: [String], required: true },
    correctIndex: { type: Number, required: true },
  },
  { timestamps: false }
);

export type SectorDoc = InferSchemaType<typeof SectorSchema>;
export type TopicDoc = InferSchemaType<typeof TopicSchema>;
export type QuizQuestionDoc = InferSchemaType<typeof QuizQuestionSchema>;

export const SectorModel =
  mongoose.models.Sector || mongoose.model("Sector", SectorSchema);
export const TopicModel =
  mongoose.models.Topic || mongoose.model("Topic", TopicSchema);
export const QuizQuestionModel =
  mongoose.models.QuizQuestion ||
  mongoose.model("QuizQuestion", QuizQuestionSchema);

