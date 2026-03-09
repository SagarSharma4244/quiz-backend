export interface Sector {
  id: string;
  name: string;
}

export interface Topic {
  id: string;
  sectorId: string;
  name: string;
}

export interface QuizQuestion {
  id: string;
  topicId: string;
  question: string;
  options: string[];
  correctIndex: number;
}

export const sectors: Sector[] = [
  { id: "technology", name: "Technology" },
  { id: "science", name: "Science" },
  { id: "history", name: "History" },
  { id: "arts", name: "Arts" },
  { id: "programming", name: "Programming" },
];

export const topics: Topic[] = [
  { id: "web-dev", sectorId: "technology", name: "Web Development" },
  { id: "ai-ml", sectorId: "technology", name: "AI & Machine Learning" },
  { id: "databases", sectorId: "technology", name: "Databases" },
  { id: "physics", sectorId: "science", name: "Physics" },
  { id: "chemistry", sectorId: "science", name: "Chemistry" },
  { id: "biology", sectorId: "science", name: "Biology" },
  { id: "world-history", sectorId: "history", name: "World History" },
  { id: "ancient-civilizations", sectorId: "history", name: "Ancient Civilizations" },
  { id: "music", sectorId: "arts", name: "Music" },
  { id: "literature", sectorId: "arts", name: "Literature" },
  { id: "html", sectorId: "programming", name: "HTML" },
  { id: "css", sectorId: "programming", name: "CSS" },
  { id: "javascript", sectorId: "programming", name: "JavaScript" },
  { id: "typescript", sectorId: "programming", name: "TypeScript" },
  { id: "react", sectorId: "programming", name: "React" },
  { id: "nextjs", sectorId: "programming", name: "Next.js" },
  { id: "vue", sectorId: "programming", name: "Vue.js" },
  { id: "angular", sectorId: "programming", name: "Angular" },
  { id: "nodejs", sectorId: "programming", name: "Node.js" },
  { id: "express", sectorId: "programming", name: "Express.js" },
  { id: "rest-apis", sectorId: "programming", name: "REST APIs" },
  { id: "graphql", sectorId: "programming", name: "GraphQL" },
  { id: "responsive-design", sectorId: "programming", name: "Responsive Design" },
  { id: "tailwind-css", sectorId: "programming", name: "Tailwind CSS" },
  { id: "git", sectorId: "programming", name: "Git" },
  { id: "testing", sectorId: "programming", name: "Testing (Jest, Vitest)" },
  { id: "state-management", sectorId: "programming", name: "State Management" },
  { id: "webpack-vite", sectorId: "programming", name: "Build Tools (Webpack, Vite)" },
  { id: "accessibility", sectorId: "programming", name: "Web Accessibility" },
  { id: "performance", sectorId: "programming", name: "Web Performance" },
];

export const quizQuestions: QuizQuestion[] = [
  { id: "q1", topicId: "web-dev", question: "What does HTML stand for?", options: ["Hyper Text Markup Language", "High Tech Modern Language", "Home Tool Markup Language", "Hyperlink and Text Markup Language"], correctIndex: 0 },
  { id: "q2", topicId: "web-dev", question: "Which CSS property controls element spacing?", options: ["margin", "spacing", "gap", "space"], correctIndex: 0 },
  { id: "q3", topicId: "ai-ml", question: "What is the main goal of supervised learning?", options: ["Learn from labeled data to make predictions", "Discover hidden patterns in unlabeled data", "Optimize game strategies", "Generate random outputs"], correctIndex: 0 },
  { id: "q4", topicId: "physics", question: "What is the unit of force?", options: ["Newton", "Joule", "Watt", "Pascal"], correctIndex: 0 },
  { id: "q5", topicId: "world-history", question: "In which year did World War II end?", options: ["1943", "1944", "1945", "1946"], correctIndex: 2 },
  { id: "q6", topicId: "databases", question: "What does SQL stand for?", options: ["Structured Query Language", "Simple Query Language", "Standard Query Logic", "Stored Query List"], correctIndex: 0 },
  { id: "q7", topicId: "chemistry", question: "What is the chemical symbol for water?", options: ["H2O", "CO2", "O2", "NaCl"], correctIndex: 0 },
  { id: "q8", topicId: "biology", question: "What is the powerhouse of the cell?", options: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"], correctIndex: 1 },
  { id: "q9", topicId: "ancient-civilizations", question: "Which civilization built the pyramids?", options: ["Greeks", "Romans", "Egyptians", "Mesopotamians"], correctIndex: 2 },
  { id: "q10", topicId: "music", question: "How many strings does a standard guitar have?", options: ["4", "5", "6", "7"], correctIndex: 2 },
  { id: "q11", topicId: "literature", question: "Who wrote Romeo and Juliet?", options: ["Charles Dickens", "Jane Austen", "William Shakespeare", "Mark Twain"], correctIndex: 2 },
  { id: "q12", topicId: "html", question: "Which tag creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], correctIndex: 1 },
  { id: "q13", topicId: "css", question: "Which property changes text color?", options: ["font-color", "color", "text-color", "text-style"], correctIndex: 1 },
  { id: "q14", topicId: "javascript", question: "Which keyword declares a variable that cannot be reassigned?", options: ["let", "var", "const", "static"], correctIndex: 2 },
  { id: "q15", topicId: "typescript", question: "What does TypeScript add to JavaScript?", options: ["Faster runtime", "Static typing", "Built-in database", "Native mobile support"], correctIndex: 1 },
  { id: "q16", topicId: "react", question: "What hook manages state in a React functional component?", options: ["useEffect", "useState", "useContext", "useReducer"], correctIndex: 1 },
  { id: "q17", topicId: "nextjs", question: "Next.js is built on top of which framework?", options: ["Vue", "Angular", "React", "Svelte"], correctIndex: 2 },
  { id: "q18", topicId: "vue", question: "Which Vue directive binds data to an element?", options: ["v-model", "v-bind", "v-on", "v-if"], correctIndex: 1 },
  { id: "q19", topicId: "angular", question: "Angular is developed and maintained by?", options: ["Facebook", "Google", "Microsoft", "Mozilla"], correctIndex: 1 },
  { id: "q20", topicId: "nodejs", question: "Node.js runs JavaScript on the __?", options: ["Browser", "Client", "Server", "Database"], correctIndex: 2 },
  { id: "q21", topicId: "express", question: "Express.js is a framework for which runtime?", options: ["Python", "Ruby", "Node.js", "Java"], correctIndex: 2 },
  { id: "q22", topicId: "rest-apis", question: "Which HTTP method is used to create a resource?", options: ["GET", "PUT", "POST", "DELETE"], correctIndex: 2 },
  { id: "q23", topicId: "graphql", question: "GraphQL was developed by?", options: ["Google", "Amazon", "Facebook", "Netflix"], correctIndex: 2 },
  { id: "q24", topicId: "responsive-design", question: "Which CSS unit is relative to viewport width?", options: ["em", "rem", "vw", "px"], correctIndex: 2 },
  { id: "q25", topicId: "tailwind-css", question: "Tailwind CSS is a __ framework?", options: ["Component", "Utility-first", "Object-oriented", "Functional"], correctIndex: 1 },
  { id: "q26", topicId: "git", question: "Which command creates a new branch?", options: ["git new", "git branch", "git checkout -b", "git create"], correctIndex: 2 },
  { id: "q27", topicId: "testing", question: "Jest is primarily a __ for JavaScript?", options: ["Linter", "Bundler", "Test framework", "Package manager"], correctIndex: 2 },
  { id: "q28", topicId: "state-management", question: "Redux is commonly used with which framework?", options: ["Vue", "Angular", "React", "Svelte"], correctIndex: 2 },
  { id: "q29", topicId: "webpack-vite", question: "Vite uses __ for development instead of bundling?", options: ["Babel", "Rollup", "Native ES modules", "Webpack"], correctIndex: 2 },
  { id: "q30", topicId: "accessibility", question: "What does ARIA stand for?", options: ["Accessible Rich Internet Applications", "Advanced Responsive Internet Access", "Automated Resource Integration API", "Adaptive Routing for Internet Accessibility"], correctIndex: 0 },
  { id: "q31", topicId: "performance", question: "Which technique defers loading images until they enter the viewport?", options: ["Lazy loading", "Caching", "Minification", "Code splitting"], correctIndex: 0 },
];
