import express from "express";
import { Copilot } from "monacopilot";
import { config } from "dotenv";
import cors from "cors";
config();
const app = express();
app.use(express.json());
app.use(cors());

const port = 5000;

const API_KEY = process.env.GEMINI_API_KEY;

const copilot = new Copilot(API_KEY, {
  provider: "google",
  model: "gemini-1.5-flash",
});

app.post("/complete/server", async (req, res) => {
  const { completion, error } = await copilot.complete({
    body: req.body,
  });

  if (error) {
    console.error("Completion error:", error);
    res.status(500).json({ completion: null, error });
  }

  res.status(200).json({ completion });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
