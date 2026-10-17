// B4F Hub — local API.
//
// A small standalone Express server. It loads deterministic seed data on startup;
// all changes (new posts, likes, applications) live only in memory and are reset
// the next time this server restarts.
//
// Run with: npm start  (from inside the server/ folder — the client/ folder is a
// separate project and is started in its own terminal).

import express from "express";
import { delay } from "./utils.js";
import { opportunities } from "./store.js";
import postsRouter from "./routes/posts.js";
import healthRouter from "./routes/health.js";

const PORT = 3001;

const app = express();
app.use(express.json());

const ALLOWED_TYPES = ["job", "internship", "scholarship", "volunteer"];

// ---------- Health ----------

app.use("/api/health", healthRouter);

// ---------- Community ----------

app.use("/api/posts", postsRouter);

// ---------- Opportunities ----------

app.get("/api/opportunities", async (req, res) => {
  await delay(350);

  res.json(opportunities);
});

app.get("/api/opportunities/:id", (req, res) => {
  const id = Number(req.params.id);
  const opportunity = opportunities.find((candidate) => candidate.id === id);

  if (!opportunity) {
    return res
      .status(404)
      .json({ error: `No opportunity found with id ${id}.` });
  }

  res.json(opportunity);
});

app.get("/api/opportunities/type/:type", (req, res) => {
  const { type } = req.params;

  if (!ALLOWED_TYPES.includes(type)) {
    return res
      .status(400)
      .json({ error: `type must be one of: ${ALLOWED_TYPES.join(", ")}.` });
  }

  const matches = opportunities.filter(
    (opportunity) => opportunity.type === type,
  );

  res.json(matches);
});

app.patch("/api/opportunities/:id", (req, res) => {
  const id = Number(req.params.id);
  const { applied } = req.body ?? {};

  if (applied !== true) {
    return res
      .status(400)
      .json({ error: "applied is required and must be true." });
  }

  const opportunity = opportunities.find((candidate) => candidate.id === id);

  if (!opportunity) {
    return res
      .status(404)
      .json({ error: `No opportunity found with id ${id}.` });
  }

  if (opportunity.applied) {
    return res
      .status(409)
      .json({ error: "You have already applied to this opportunity." });
  }

  opportunity.applied = true;

  res.json(opportunity);
});

app.listen(PORT, () => {
  console.log(`B4F Hub local API running at http://localhost:${PORT}`);
});
