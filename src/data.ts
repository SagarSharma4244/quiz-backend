export interface Subject {
  id: string;
  title: string;
  description?: string;
  publish_status?: "Draft" | "private" | "public";
  chapters_sequence?: string[];
}

export interface Chapter {
  id: string;
  subjectId: string;
  title: string;
  description?: string;
  publish_status?: "Draft" | "private" | "public";
  questions_sequence?: string[];
  level?: "Easy" | "Medium" | "Hard";
}

export interface Question {
  id: string;
  chapterId: string;
  question_type?: "mcq" | "multiple_choice" | "drag" | "correct_sequence" | "match_the_following";
  title: string;
  options: string[];
  answer?: number | Array<unknown> | Array<Array<unknown>>;
  subtitle?: string;
  reason?: string;
  publish_status?: "Draft" | "private" | "public" | "testing";
}

export const subjects: Subject[] = [
  { id: "technology", title: "Technology", publish_status: "public", description: "Tech subjects" },
  { id: "science", title: "Science", publish_status: "public", description: "Science subjects" },
  { id: "history", title: "History", publish_status: "public", description: "History subjects" },
  { id: "arts", title: "Arts", publish_status: "public", description: "Arts subjects" },
  { id: "programming", title: "Programming", publish_status: "public", description: "Programming subjects" },
  { id: "reactjs", title: "ReactJs", publish_status: "public", description: "ReactJs subject covering components, hooks, and routing" }
];

export const chapters: Chapter[] = [
  { id: "web-dev", subjectId: "technology", title: "Web Development", publish_status: "public", level: "Easy" },
  { id: "ai-ml", subjectId: "technology", title: "AI & Machine Learning", publish_status: "public", level: "Medium" },
  { id: "databases", subjectId: "technology", title: "Databases", publish_status: "public", level: "Medium" },
  { id: "physics", subjectId: "science", title: "Physics", publish_status: "public", level: "Easy" },
  { id: "chemistry", subjectId: "science", title: "Chemistry", publish_status: "public", level: "Easy" },
  { id: "biology", subjectId: "science", title: "Biology", publish_status: "public", level: "Easy" },
  { id: "world-history", subjectId: "history", title: "World History", publish_status: "public", level: "Medium" },
  { id: "ancient-civilizations", subjectId: "history", title: "Ancient Civilizations", publish_status: "public", level: "Medium" },
  { id: "music", subjectId: "arts", title: "Music", publish_status: "public", level: "Easy" },
  { id: "literature", subjectId: "arts", title: "Literature", publish_status: "public", level: "Easy" },
  { id: "html", subjectId: "programming", title: "HTML", publish_status: "public", level: "Easy" },
  { id: "css", subjectId: "programming", title: "CSS", publish_status: "public", level: "Easy" },
  { id: "javascript", subjectId: "programming", title: "JavaScript", publish_status: "public", level: "Medium" },
  { id: "typescript", subjectId: "programming", title: "TypeScript", publish_status: "public", level: "Medium" },
  { id: "react", subjectId: "programming", title: "React", publish_status: "public", level: "Medium" },
  { id: "reactjs-basics", subjectId: "reactjs", title: "ReactJs Basics", publish_status: "public", level: "Easy" },
  { id: "nextjs", subjectId: "programming", title: "Next.js", publish_status: "public", level: "Medium" },
  { id: "vue", subjectId: "programming", title: "Vue.js", publish_status: "public", level: "Medium" },
  { id: "angular", subjectId: "programming", title: "Angular", publish_status: "public", level: "Medium" },
  { id: "nodejs", subjectId: "programming", title: "Node.js", publish_status: "public", level: "Medium" },
  { id: "express", subjectId: "programming", title: "Express.js", publish_status: "public", level: "Medium" },
  { id: "rest-apis", subjectId: "programming", title: "REST APIs", publish_status: "public", level: "Medium" },
  { id: "graphql", subjectId: "programming", title: "GraphQL", publish_status: "public", level: "Hard" },
  { id: "responsive-design", subjectId: "programming", title: "Responsive Design", publish_status: "public", level: "Hard" },
  { id: "tailwind-css", subjectId: "programming", title: "Tailwind CSS", publish_status: "public", level: "Hard" },
  { id: "git", subjectId: "programming", title: "Git", publish_status: "public", level: "Medium" },
  { id: "testing", subjectId: "programming", title: "Testing (Jest, Vitest)", publish_status: "public", level: "Medium" },
  { id: "state-management", subjectId: "programming", title: "State Management", publish_status: "public", level: "Hard" },
  { id: "webpack-vite", subjectId: "programming", title: "Build Tools (Webpack, Vite)", publish_status: "public", level: "Hard" },
  { id: "accessibility", subjectId: "programming", title: "Web Accessibility", publish_status: "public", level: "Hard" },
  { id: "performance", subjectId: "programming", title: "Web Performance", publish_status: "public", level: "Hard" },
];

export const questions: Question[] = [
  { id: "q1", chapterId: "web-dev", question_type: "mcq", title: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"], answer: 0 },
  { id: "q2", chapterId: "web-dev", question_type: "mcq", title: "Which CSS property controls element spacing?", options: ["margin", "spacing", "gap", "space"], answer: 0 },
  { id: "q3", chapterId: "ai-ml", question_type: "mcq", title: "What is the main goal of supervised learning?", options: ["Learn from labeled data to make predictions", "Discover hidden patterns in unlabeled data", "Optimize game strategies", "Generate random outputs"], answer: 0 },
  { id: "q4", chapterId: "physics", question_type: "mcq", title: "What is the unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], answer: 0 },
  { id: "q5", chapterId: "world-history", question_type: "mcq", title: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], answer: 2 },
  { id: "q6", chapterId: "databases", question_type: "mcq", title: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "Stored Query List"], answer: 0 },
  { id: "q7", chapterId: "chemistry", question_type: "mcq", title: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "NaCl"], answer: 0 },
  { id: "q8", chapterId: "biology", question_type: "mcq", title: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"], answer: 1 },
  { id: "q9", chapterId: "ancient-civilizations", question_type: "mcq", title: "Which civilization built the pyramids?", options: ["Greeks", "Romans", "Egyptians", "Mesopotamians"], answer: 2 },
  { id: "q10", chapterId: "music", question_type: "mcq", title: "How many strings does a standard guitar have?", options: ["4", "5", "6", "7"], answer: 2 },
  { id: "q11", chapterId: "literature", question_type: "mcq", title: "Who wrote Romeo and Juliet?", options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"], answer: 2 },
  { id: "q12", chapterId: "html", question_type: "mcq", title: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1 },
  { id: "q13", chapterId: "css", question_type: "mcq", title: "Which property changes text color?", options: ["font-color", "color", "text-color", "text-style"], answer: 1 },
  { id: "q14", chapterId: "javascript", question_type: "mcq", title: "Which keyword declares a variable that cannot be reassigned?", options: ["let", "var", "const", "static"], answer: 2 },
  { id: "q15", chapterId: "typescript", question_type: "mcq", title: "What does TypeScript add to JavaScript?", options: ["Faster runtime", "Static typing", "Built-in database", "Native mobile support"], answer: 1 },
  { id: "q16", chapterId: "react", question_type: "mcq", title: "What hook manages state in a React functional component?", options: ["useEffect", "useState", "useContext", "useReducer"], answer: 1 },
  { id: "q16-reactjs", chapterId: "reactjs-basics", question_type: "mcq", title: "What is JSX in React?", options: ["A database", "A JavaScript syntax extension", "A CSS preprocessor", "A testing framework"], answer: 1, subtitle: "JSX is commonly used to declare React UI.", reason: "JSX stands for JavaScript XML and is a syntax extension used in React."},
  { id: "q17", chapterId: "nextjs", question_type: "mcq", title: "Next.js is built on top of which framework?", options: ["Vue", "Angular", "React", "Svelte"], answer: 2 },
  { id: "q18", chapterId: "vue", question_type: "mcq", title: "Which Vue directive binds data to an element?", options: ["v-model", "v-bind", "v-on", "v-if"], answer: 1 },
  { id: "q19", chapterId: "angular", question_type: "mcq", title: "Angular is developed and maintained by?", options: ["Facebook", "Google", "Microsoft", "Mozilla"], answer: 1 },
  { id: "q20", chapterId: "nodejs", question_type: "mcq", title: "Node.js runs JavaScript on the __?", options: ["Browser", "Client", "Server", "Database"], answer: 2 },
  { id: "q21", chapterId: "express", question_type: "mcq", title: "Express.js is a framework for which runtime?", options: ["Python", "Ruby", "Node.js", "Java"], answer: 2 },
  { id: "q22", chapterId: "rest-apis", question_type: "mcq", title: "Which HTTP method is used to create a resource?", options: ["GET", "PUT", "POST", "DELETE"], answer: 2 },
  { id: "q23", chapterId: "graphql", question_type: "mcq", title: "GraphQL was developed by?", options: ["Google", "Amazon", "Facebook", "Netflix"], answer: 2 },
  { id: "q24", chapterId: "responsive-design", question_type: "mcq", title: "Which CSS unit is relative to viewport width?", options: ["em", "rem", "vw", "px"], answer: 2 },
  { id: "q25", chapterId: "tailwind-css", question_type: "mcq", title: "Tailwind CSS is a __ framework?", options: ["Component", "Utility-first", "Object-oriented", "Functional"], answer: 1 },
  { id: "q26", chapterId: "git", question_type: "mcq", title: "Which command creates a new branch?", options: ["git new", "git branch", "git checkout -b", "git create"], answer: 2 },
  { id: "q27", chapterId: "testing", question_type: "mcq", title: "Jest is primarily a __ for JavaScript?", options: ["Linter", "Bundler", "Test framework", "Package manager"], answer: 2 },
  { id: "q28", chapterId: "state-management", question_type: "mcq", title: "Redux is commonly used with which framework?", options: ["Vue", "Angular", "React", "Svelte"], answer: 2 },
  { id: "q29", chapterId: "webpack-vite", question_type: "mcq", title: "Vite uses __ for development instead of bundling?", options: ["Babel", "Rollup", "Native ES modules", "Webpack"], answer: 2 },
  { id: "q30", chapterId: "accessibility", question_type: "mcq", title: "What does ARIA stand for?", options: ["Accessible Rich Internet Applications", "Advanced Responsive Internet Access", "Automated Resource Integration API", "Adaptive Routing for Internet Accessibility"], answer: 0 },
  { id: "q31", chapterId: "performance", question_type: "mcq", title: "Which technique defers loading images until they enter the viewport?", options: ["Lazy loading", "Caching", "Minification", "Code splitting"], answer: 0 },
];
