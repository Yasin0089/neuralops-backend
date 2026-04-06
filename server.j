import express from "express";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("NeuralOps backend running");
});

app.post("/api/proposal", (req, res) => {
  const { name } = req.body;
  res.json({ message: `Proposal created for ${name}` });
});

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
