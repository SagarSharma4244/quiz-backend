"use client";

type Subject = {
  id: string;
  title: string;
  description?: string;
  publish_status?: "Draft" | "private" | "public";
  chapters_sequence?: string[];
};

type Chapter = {
  id: string;
  subjectId: string;
  title: string;
  description?: string;
  publish_status?: "Draft" | "private" | "public";
  questions_sequence?: string[];
  level?: "Easy" | "Medium" | "Hard";
};

type Question = {
  id: string;
  chapterId: string;
  question_type?: "mcq" | "multiple_choice" | "drag" | "correct_sequence" | "match_the_following";
  title: string;
  question: string;
  options: string[];
  correctIndex: number;
  answer?: number | unknown[] | unknown[][];
  subtitle?: string;
  reason?: string;
  publish_status?: "Draft" | "private" | "public" | "testing";
};

