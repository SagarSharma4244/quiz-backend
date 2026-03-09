import mongoose from "mongoose";

const DEFAULT_URI = "mongodb://127.0.0.1:27017/quiz-app";

export async function connectDB() {
  const uri = process.env.MONGO_URL || DEFAULT_URI;

  if (mongoose.connection.readyState === 1) {
    return;
  }

  await mongoose.connect(uri, {
    maxPoolSize: 10,
    serverSelectionTimeoutMS: 5000,
    socketTimeoutMS: 45000,
  } as mongoose.ConnectOptions);

  console.log("Connected to MongoDB");
}

