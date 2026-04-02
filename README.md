# InboxPilot AI 🚀

InboxPilot AI is an AI-powered customer support assistant designed for freelancers, e-commerce stores, and small businesses. It leverages the **Oxlo.ai** API to analyze incoming messages, provide sentiment context, and suggest ready-to-use responses.

## ✨ Features

- **AI Analysis**: Get category, urgency, and sentiment for any message.
- **Smart Summaries**: Instant bullet-point summaries of long customer threads.
- **Suggested Replies**: Draft professional responses in seconds.
- **Dashboard Analytics**: Track message volume, urgency trends, and customer sentiment.
- **Analysis History**: Securely save and re-visit every interaction.
- **Modern SaaS UI**: Clean, responsive dashboard with dark mode support.

## 🛠️ Technology Stack

### Backend
- **Framework**: Node.js / Express / TypeScript
- **ORM**: Prisma 7.0 (with PostgreSQL Adapter)
- **Database**: PostgreSQL (Neon.tech / Railway)
- **Authentication**: JWT (JSON Web Tokens) with bcrypt hashing
- **AI Engine**: Oxlo.ai (LLM Chat Completions)

### Frontend
- **Framework**: Next.js 15 (App Router) / TypeScript
- **Styling**: Tailwind CSS
- **Components**: shadcn/ui
- **Icons**: Lucide React
- **State Management**: React Context & Hooks

## 🚀 Getting Started

### 1. Prerequisites
- Node.js (v20+)
- PostgreSQL Database
- Oxlo.ai API Key

### 2. Backend Setup
1. Navigate to the `backend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file from the provided template:
   ```env
   DATABASE_URL="your_postgresql_url"
   JWT_SECRET="your_secret"
   OXLO_API_KEY="your_oxlo_key"
   ```
4. Run migrations and generate Prisma client:
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```
5. Start development server:
   ```bash
   npm run dev
   ```

### 3. Frontend Setup
1. Navigate to the `Frontend` folder.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file:
   ```env
   NEXT_PUBLIC_API_BASE_URL="http://localhost:5000/api"
   ```
4. Start development server:
   ```bash
   npm run dev
   ```

## 🧠 Oxlo.ai Integration
The platform uses the **Oxlo.ai** chat completions endpoint to process messages. We use a strictly defined JSON schema in our prompts to ensure the AI returns data that can be parsed and stored in the database without manual cleanup.

Example Prompt Structure:
```text
Analyze the following customer message and return ONLY valid JSON:
{
  "category": "String",
  "urgency": "Low | Medium | High",
  "sentiment": "String",
  ...
}
```

## 📑 Database Schema
- **User**: Authentication and profile data.
- **Analysis**: Stores message content, AI insights, and suggested replies.

---
Created for the **Oxlo AI Hackathon** 2026.
