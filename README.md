<p align="center">
  <img src="src/assets/singulariti-logo.png" alt="Singulariti Logo" width="150"/>
</p>

# Singulariti Landing Page

**The Personalised Agentic Layer For Your OS**



## Project Structure

```
singulariti_landing_page/
├─ src/                   # Vite frontend source code
│  ├─ assets/             # Images, logos, and static assets
│  ├─ components/         # React components
│  ├─ App.tsx             # Main React app
│  └─ index.tsx           # React entry point
├─ server/                # Node.js backend
│  └─ index.js            # Express server
├─ prisma/                # Prisma schema & migrations
├─ dist/                  # Vite production build
└─ package.json
```

## Setup

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment:**
   ```env
   DATABASE_URL="your-neon-database-url"
   PORT=5000
   ```

3. **Setup database:**
   ```bash
   npx prisma generate
   npx prisma migrate dev --name init
   ```

## Development

```bash
# Run both frontend and backend
npm run dev

# Run only frontend (port 5173)
npm run dev:vite

# Run only server (port 5000)
npm run dev:server
```

## Production

```bash
# Build frontend
npm run build

# Start server (serves API + frontend on port 5000)
npm run start
```

## Tech Stack

* **Frontend:** Vite + React + TypeScript + TailwindCSS
* **Backend:** Node.js + Express
* **Database:** Neon DB (PostgreSQL) + Prisma

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `POST` | `/api/waitlist` | Add email to waitlist |
| `GET` | `/api/waitlist` | Get all waitlist emails |

## Notes

* Ensure you run `npx prisma generate` after setting up the `.env` with your database URL.
* In production, the Node server serves the static frontend from `dist/`.
* `.gitignore` is configured to ignore `node_modules`, `dist/`, and environment files.