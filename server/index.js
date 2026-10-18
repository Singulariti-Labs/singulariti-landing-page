import express from "express";
import cors from "cors";
import compression from "compression";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(compression());
app.use(cors());
app.use(express.json());

// ================== API ROUTES ==================
app.post("/api/waitlist", async (req, res) => {
  const { email, name, profession, system } = req.body;
  if (!email || !name || !profession || !system) {
    return res.status(400).json({ error: "All fields are required" });
  }

  try {
    const newEntry = await prisma.new_waitlist.create({
      data: { email, name, profession, system },
    });
    res.json({ success: true, entry: newEntry });
  } catch (error) {
    if (error.code === "P2002") {
      return res.status(400).json({ error: "Email already registered" });
    }
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

// ================== STATIC FRONTEND ==================
// __dirname replacement for ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const distDirectory = path.join(__dirname, "../dist");

// Vite fingerprints build assets, so they can be cached permanently. Root files
// such as the favicon keep a short cache because their names are stable.
app.use(
  "/assets",
  express.static(path.join(distDirectory, "assets"), {
    immutable: true,
    index: false,
    maxAge: "1y",
  }),
);
app.use(
  express.static(distDirectory, {
    index: false,
    maxAge: "1h",
  }),
);

// Preserve existing links and transfer search ranking signals to the canonical Aura URL.
app.get("/get-your-aura", (req, res) => {
  res.redirect(301, "/aura");
});

// Catch-all route -> send React app
app.get(/^(?!\/api).*/, (req, res) => {
  res.set("Cache-Control", "no-cache");
  res.sendFile(path.join(distDirectory, "index.html"));
});

// ================== START SERVER ==================
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
