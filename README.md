# Quiz Backend API

Express + TypeScript backend for the Quiz app.

## Setup

```bash
npm install
cp .env.example .env   # then edit if needed
```

## Run

```bash
npm run dev    # Development (port 3002)
npm run build  # Build for production
npm start      # Run production build
```

## MongoDB

By default the API connects to:

- `mongodb://127.0.0.1:27017/quiz-app`

You can override this in `.env`:

```bash
MONGO_URL=mongodb://127.0.0.1:27017/quiz-app
```

### Seed initial data

```bash
npm run seed
```

This will insert subjects, chapters, and questions into MongoDB.

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/subjects` | List all subjects |
| GET | `/api/subjects/:subjectId` | Get subject by ID |
| GET | `/api/chapters` | List all chapters |
| GET | `/api/chapters?subjectId=:subjectId` | List chapters by subject |
| GET | `/api/chapters/:chapterId` | Get chapter by ID |
| GET | `/api/questions` | List all questions |
| GET | `/api/questions?chapterId=:chapterId` | List questions by chapter |
| GET | `/api/questions/:questionId` | Get question by ID |
| POST | `/api/questions/:questionId/submit` | Submit answer `{ "selectedIndex": 0 }` |
