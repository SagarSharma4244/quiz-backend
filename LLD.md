# Low-Level Design (LLD)

## 1. Subject

| Field | Type | Notes |
|---|---|---|
| id | string | Unique identifier |
| title | string | Subject title |
| description | string | Text description |
| publish_status | enum | Draft, private, public |
| chapters_sequence | array | List of chapter ids |

## 2. Chapters

| Field | Type | Notes |
|---|---|---|
| chapter_id | string | Unique chapter id |
| subject_id | string | Identifies which subject this chapter belongs to |
| publish_status | enum | Draft, private, public |
| title | string | Chapter title |
| description | string | Chapter description |
| questions_sequence | array | List of question ids |
| level | enum | Easy, Medium, Hard |

## 3. Question

| Field | Type | Notes |
|---|---|---|
| question_id | string | Unique question id |
| chapter_id | string | Identifies which chapter this question belongs to |
| question_type | enum | mcq, multiple_choice, drag, correct_sequence, match_the_following |
| title | string | Question text |
| options | array | Options for MCQ or matching |
| answer | number / array / nested array | Correct answer format depends on type |
| subtitle | string | Optional hint/subtitle |
| reason | string | Explanation of correct answer |
| publish_status | enum | Draft, private, public, testing |

## 4. User

| Field | Type | Notes |
|---|---|---|
| id | string | Unique user id |
| email | string | User email |
| username | string | Display username |
| name | string | Full name |
| login_type | string | e.g., email/password, OAuth |
| user_type | enum | Free, premium |

## 5. User Details

| Field | Type | Notes |
|---|---|---|
| user_id | string | Reference to User.id |
| progress | object | Tracking progress per subject/chapter/question |

---

## 6. Mongo Collections (quiz-backend-1)

| Collection | Model | Key Fields | Indexed Fields |
|---|---|---|---|
| subjects | SubjectModel | id, name | id (unique) |
| chapters | ChapterModel | id, subjectId, name | id (unique), subjectId |
| questions | QuestionModel | id, chapterId, question_type, options, answer | id (unique), chapterId |

