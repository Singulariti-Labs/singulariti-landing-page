import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import path from "path";
import { fileURLToPath } from "url";
import { PrismaClient } from "@prisma/client";

dotenv.config();
const app = express();
const prisma = new PrismaClient();

app.use(cors());
app.use(express.json());

// Waitlist API
app.post("/api/waitlist", async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: "Email is required" });

  try {
    const newEntry = await prisma.waitlist.create({ data: { email } });
    res.json({ success: true, entry: newEntry });
  } catch (error) {
    if (error.code === "P2002") return res.status(400).json({ error: "Email already registered" });
    console.error(error);
    res.status(500).json({ error: "Something went wrong" });
  }
});

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Serve Vite build from root dist
app.use(express.static(path.join(__dirname, "../dist")));
app.get(/^\/.*$/, (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
