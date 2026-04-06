import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    agents: ["Planner", "Executor", "Analyzer", "Sales AI"]
  });
});

export default router;
