import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import clientsRoute from "./routes/clients.js";
import agentsRoute from "./routes/agents.js";
import proposalRoute from "./routes/proposal.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/clients", clientsRoute);
app.use("/api/agents", agentsRoute);
app.use("/api/proposal", proposalRoute);

app.get("/", (req, res) => {
  res.send("NeuralOps Backend Running 🚀");
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
});
