import express from "express";

const router = express.Router();

let clients = [];

router.get("/", (req, res) => {
  res.json(clients);
});

router.post("/", (req, res) => {
  const client = req.body;
  clients.push(client);
  res.json({ message: "Client added", client });
});

export default router;
