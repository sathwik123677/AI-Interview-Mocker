# 🎯 AI Interview Mocker

An AI-powered mock interview platform that helps users prepare for technical interviews through personalized interview generation, voice-based responses, and detailed AI feedback.
Users can generate customized interview questions based on their job role, experience, and technology stack. The application records answers using speech recognition, evaluates responses using Google Gemini AI, and provides comprehensive feedback to improve interview performance.
---
# 🚀 Features
- 🔐 Secure Authentication using Clerk
- 🤖 AI-generated interview questions powered by Google Gemini
- 🎯 Personalized interviews based on:
  - Job Role
  - Tech Stack
  - Years of Experience
- 🎤 Voice-based answering using Speech Recognition
- 📝 Automatic Speech-to-Text conversion
- 📊 AI-generated interview evaluation
- ⭐ Overall Interview Rating
- 💡 Improvement Suggestions
- 💾 PostgreSQL database integration
---
# 🛠 Tech Stack
### Frontend
- Next.js 14
- React.js
- Tailwind CSS
- Shadcn UI
- Lucide React

### Backend
- Next.js Server Actions
- Google Gemini AI API
### Authentication
- Clerk Authentication
### Database
- PostgreSQL
- Drizzle ORM
### AI
- Google Gemini API
---
# ⚙️ How It Works
### 1. User Authentication
- User opens the application.
- Signs in or signs up using Clerk Authentication.
- Redirected to the dashboard after successful login.
---
### 2. Interview Creation
The user provides:
- Job Role
- Tech Stack
- Years of Experience
- Number of Questions
The application generates a prompt and sends it to Google Gemini AI.
---
### 3. AI Interview Generation
Google Gemini AI creates personalized interview questions based on the user's inputs.
The generated interview is stored in PostgreSQL using Drizzle ORM.
---
### 4. Interview Session
During the interview:
- Questions are displayed one by one.
- User answers using voice.
- Browser Speech Recognition converts speech into text.
- Each response is saved into the database.
---
### 5. AI Evaluation
After completing the interview:
Google Gemini AI evaluates all responses and generates:
- Overall Rating
- Technical Feedback
- Communication Feedback
- Strengths
- Weaknesses
- Improvement Suggestions
- Ideal Answers
---
### 6. Feedback Dashboard
Users can view:
- Interview Score
- AI Feedback
- Correct Answers
- Performance Analysis
- Suggestions for Improvement
---
# 🗄 Database
The application uses PostgreSQL with Drizzle ORM.
Stored information includes:
- User Information
- Interview Details
- Generated Questions
- User Responses
- AI Feedback
- Ratings
---
# 🔑 Environment Variables

Create a `.env.local` file.
```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=

CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in

NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

NEXT_PUBLIC_GEMINI_API_KEY=

NEXT_PUBLIC_DRIZZLE_DB_URL=

NEXT_PUBLIC_INTERVIEW_QUESTION_COUNT=
```
---
# 📊 Application Workflow

```text
                               START
                                 │
                                 ▼
                      User Opens Application
                                 │
                                 ▼
                         Landing Page
                                 │
                                 ▼
                      Click "Get Started"
                                 │
                                 ▼
                     Clerk Authentication
                                 │
                ┌────────────────┴────────────────┐
                │                                 │
                ▼                                 ▼
        Authentication Failed          Authentication Success
                │                                 │
                ▼                                 ▼
       Display Login Error                Dashboard
                │                                 │
                └──────────────┐                  │
                               │                  ▼
                               │         Create Interview
                               │                  │
                               │                  ▼
                               │      Enter Job Role
                               │                  │
                               │                  ▼
                               │      Enter Tech Stack
                               │                  │
                               │                  ▼
                               │   Enter Years of Experience
                               │                  │
                               │                  ▼
                               │  Select Number of Questions
                               │                  │
                               │                  ▼
                               │     Generate Prompt
                               │                  │
                               │                  ▼
                               │   Send Prompt to Gemini AI
                               │                  │
                               │                  ▼
                               │ Generate Personalized Questions
                               │                  │
                               │                  ▼
                               │ Save Questions to PostgreSQL
                               │                  │
                               │                  ▼
                               │     Start Interview
                               │                  │
                               │                  ▼
                               │  Display Question One-by-One
                               │                  │
                               │                  ▼
                               │ Enable Webcam & Microphone
                               │                  │
                               │                  ▼
                               │   User Speaks Answer
                               │                  │
                               │                  ▼
                               │  Speech-to-Text Conversion
                               │                  │
                               │                  ▼
                               │ Save Answer in Database
                               │                  │
                               │                  ▼
                               │   More Questions?
                               │         │
                     ┌──────────┴──────────┐
                     │                     │
                     ▼                     ▼
                  YES                   NO
                     │                     │
                     │                     ▼
                     │         Interview Completed
                     │                     │
                     └────────────┐        ▼
                                  │ Send Answers to Gemini AI
                                  │        │
                                  │        ▼
                                  │ Generate AI Feedback
                                  │        │
                                  │        ▼
                                  │ Generate Ratings
                                  │        │
                                  │        ▼
                                  │ Generate Ideal Answers
                                  │        │
                                  │        ▼
                                  │ Generate Strengths
                                  │        │
                                  │        ▼
                                  │ Generate Weaknesses
                                  │        │
                                  │        ▼
                                  │ Generate Suggestions
                                  │        │
                                  │        ▼
                                  │ Save Feedback to PostgreSQL
                                  │        │
                                  │        ▼
                                  │ Display Feedback Dashboard
                                  │        │
                                  ▼        ▼
                                END
```
---

# 💻 Installation
Clone the repository
```bash
git clone https://github.com/yourusername/AI-Interview-Mocker.git
```
Move into the project
```bash
cd AI-Interview-Mocker
```
Install dependencies
```bash
npm install
```
Run the development server
```bash
npm run dev
```
Open
```
http://localhost:3000
```
---
# 📦 Build
```bash
npm run build
```
---

# 🔮 Future Improvements
- Resume Upload
- Coding Interview Support
- Webcam Emotion Analysis
- Company-wise Interview Questions
- Interview History
- Performance Dashboard
- Dark Mode
- Leaderboard
- Multi-language Support

---

# ⭐ Show Your Support

If you found this project useful, please consider giving it a ⭐ on GitHub.
