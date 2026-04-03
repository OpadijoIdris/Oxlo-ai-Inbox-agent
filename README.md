# InboxPilot AI 🚀

InboxPilot AI is an AI-powered customer support assistant designed for freelancers, e-commerce stores, and small businesses. It leverages the **Oxlo.ai** API to analyze incoming messages, provide sentiment context, and suggest ready-to-use responses.

## ✨ Features

- **AI Analysis**: Get category, urgency, and sentiment for any message.
- **Smart Summaries**: Instant bullet-point summaries of long customer threads.
- **Suggested Replies**: Draft professional responses tailored to your brand voice.
- **Dashboard Analytics**: Track message volume, urgency trends, and customer sentiment with charts.
- **Analysis History**: Securely save and revisit every interaction.
- **Business Profiles**: Customize AI behavior with company policies, brand voice, and tone preferences.
- **Dark Mode UI**: Clean, responsive SaaS dashboard optimized for late-night support teams.

## 🛠️ Technology Stack

### Backend
- **Framework**: Node.js / Express / TypeScript
- **ORM**: Prisma 7.0 (with PostgreSQL Adapter)
- **Database**: PostgreSQL or SQLite
- **Authentication**: JWT (JSON Web Tokens) with bcrypt hashing
- **AI Engine**: Oxlo.ai (LLM Chat Completions)
- **API Runtime**: `tsx` for TypeScript execution

### Frontend
- **Framework**: Next.js 16 (App Router) / TypeScript / React 19
- **Styling**: Tailwind CSS v4
- **Charts**: Recharts (fixed sizing for production)
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **State Management**: React Context & Hooks
- **HTTP Client**: Axios

## 📋 Project Structure

```
InboxAgent AI/
├── Backend/                 # Express.js API
│   ├── src/
│   │   ├── controllers/     # Request handlers
│   │   ├── services/        # Business logic (analysis, oxlo calls)
│   │   ├── routes/          # API endpoints
│   │   ├── middlewares/     # Auth, error handling
│   │   ├── lib/             # Prisma client
│   │   └── index.ts         # Entry point
│   ├── prisma/
│   │   ├── schema.prisma    # Database schema
│   │   └── migrations/      # DB migrations
│   ├── package.json
│   └── tsconfig.json
├── Frontend/                # Next.js App
│   ├── src/
│   │   ├── app/             # Pages (dashboard, analyze, history, etc.)
│   │   ├── components/      # React components
│   │   ├── context/         # Auth context
│   │   ├── lib/             # Utilities (API client)
│   │   └── types/           # TypeScript types
│   ├── package.json
│   ├── next.config.ts
│   └── tsconfig.json
└── README.md
```

## 🚀 Quick Start (Development)

### Prerequisites
- **Node.js** v20+ 
- **npm** v10+ or **yarn**
- **PostgreSQL** (or SQLite for quick local testing)
- **Oxlo.ai API Key** (get from [oxlo.ai](https://oxlo.ai))

### 1. Clone & Install

```bash
cd "InboxAgent AI"

# Backend
cd Backend
npm install

# Frontend (in another terminal)
cd Frontend
npm install
```

### 2. Backend Setup

#### Create `.env` file in `Backend/`:
```env
DATABASE_URL="postgresql://user:password@localhost:5432/inboxpilot"
JWT_SECRET="your-super-secret-jwt-key-min-32-chars"
OXLO_API_KEY="your-oxlo-api-key"
PORT=5000
NODE_ENV=development
```

**Alternative (SQLite for local dev):**
```env
DATABASE_URL="file:./dev.db"
JWT_SECRET="dev-secret-key"
OXLO_API_KEY="your-oxlo-api-key"
```

#### Run migrations & start:
```bash
cd Backend

# First time: setup database
npx prisma migrate dev --name init

# Start dev server (watches .ts files)
npm run dev
```

**Expected output:**
```
Server running on http://localhost:5000
```

### 3. Frontend Setup

#### Create `.env.local` file in `Frontend/`:
```env
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```

#### Start dev server:
```bash
cd Frontend
npm run dev
```

**Expected output:**
```
▲ Next.js 16.2.2
- Local:        http://localhost:3000
```

### 4. Test the app

1. Open http://localhost:3000
2. **Register** a new account
3. **Set up Business Profile** (Company name, policies, brand voice)
4. **Analyze a message** - paste a customer inquiry
5. View **History** and **Analytics**

---

## 🔧 Production Build

### Build Backend
```bash
cd Backend
npm install --production
npm run build  # (if build script exists; otherwise use tsc)
```

### Build Frontend
```bash
cd Frontend
npm install --production
npm run build
npm run start
```

---

## 🌍 Environment Variables

### Backend (`.env`)
| Variable | Required | Example |
|----------|----------|---------|
| `DATABASE_URL` | Yes | `postgresql://...` or `file:./dev.db` |
| `JWT_SECRET` | Yes | `min-32-character-string` |
| `OXLO_API_KEY` | Yes | Your API key from Oxlo |
| `PORT` | No | `5000` (default) |
| `NODE_ENV` | No | `development` or `production` |

### Frontend (`.env.local`)
| Variable | Required | Example |
|----------|----------|---------|
| `NEXT_PUBLIC_API_BASE_URL` | Yes | `http://localhost:5000/api` |

---

## 📚 API Endpoints

All endpoints require `Authorization: Bearer <token>` header (except auth routes).

### Auth
- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Get JWT token
- `GET /api/auth/me` - Get current user (protected)

### Analysis
- `POST /api/analysis` - Analyze a message
- `GET /api/analysis` - Get all analyses for user
- `GET /api/analysis/:id` - Get single analysis
- `GET /api/analysis/stats` - Dashboard stats

### Analytics
- `GET /api/analytics` - Get analytics dashboard data

### Business Profile
- `GET /api/business-profile` - Get company settings
- `POST /api/business-profile` - Update company settings

---

## 🧠 How It Works

1. **User submits message** → API endpoint `/analysis` (POST)
2. **Backend fetches business profile** → Context for AI
3. **Calls Oxlo.ai API** → Analyzes message (sentiment, urgency, category)
4. **Stores in database** → Saves analysis + suggested reply
5. **Frontend displays** → Shows insights + reply suggestion
6. **History & Analytics** → Track all messages + trends

### AI Response Format (JSON Schema)
```json
{
  "category": "Complaint",
  "urgency": "High",
  "sentiment": "Frustrated",
  "summary": "Customer received damaged item",
  "suggestedReply": "We sincerely apologize...",
  "recommendedAction": "Issue refund or replacement",
  "confidence": 92
}
```

---

## 🐛 Troubleshooting

### "Script tag while rendering React component" warning
✅ **Fixed** - Removed `next-themes` and dark mode provider injection. App now runs pure dark mode.

### Recharts "width(-1) height(-1)" error
✅ **Fixed** - Changed `ResponsiveContainer` to use fixed pixel heights instead of `100%`.

### Database connection failed
- Check `DATABASE_URL` in `.env`
- Ensure PostgreSQL/SQLite is running
- Run `npx prisma db push` to sync schema

### API calls returning 401
- Check token is valid (hasn't expired)
- Confirm `Authorization: Bearer <token>` header format
- Re-login if needed

### Oxlo API rate limit / 429 errors
- Built-in backoff retry logic (exponential)
- If persistence, wait 5 minutes then retry
- Check API key quota at Oxlo dashboard

---

## 📦 Deployment Options

### Option 1: Vercel + Railway
- **Frontend**: Deploy `Frontend/` to Vercel
- **Backend**: Deploy `Backend/` to Railway (easy Postgres setup)
- Connect via `NEXT_PUBLIC_API_BASE_URL`

### Option 2: Docker Compose
```bash
docker-compose up
```

### Option 3: Full-stack with PM2
```bash
pm2 start Backend/dist/index.js --name "inboxpilot-api"
pm2 start "npm run start" --cwd Frontend --name "inboxpilot-web"
```

---

## 🧪 Testing Tips

1. **Test auth flow**: Register, login, get JWT
2. **Test analysis**: Submit sample message (jewelry inquiry, complaint, etc.)
3. **Test fallbacks**: Disconnect internet, confirm graceful error handling
4. **Load test**: Send multiple analyses, verify analytics

---

## 📄 License & Credits

Created for the **Oxlo AI Hackathon** 2026.  
Built with ❤️ for small businesses and freelancers.

---

## 🤝 Contributing

Found a bug? Have a feature idea?
- For jewelry SaaS integration: Customize business profile + brand voice in settings
- For other industries: Update policies and knowledge base in profile settings

---

## 📞 Support

- Issues: Check this README first
- Oxlo errors: See [Oxlo docs](https://docs.oxlo.ai)
- Database: See [Prisma docs](https://www.prisma.io/docs)
