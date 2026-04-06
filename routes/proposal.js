import express from "express";
import { generateProposal } from "../services/ai.js";

const router = express.Router();

router.post("/", async (req, res) => {
  const client = req.body;

  const proposal = await generateProposal(client);

  res.json({ proposal });
});

export default router;
