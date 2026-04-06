import express from 'express';
const app = express(); // <--- THIS LINE IS MISSING OR BELOW THE LISTEN CALL

const PORT = process.env.PORT || 3001;

// (Optional) Add a basic route so you can see it working
app.get('/', (req, res) => {
  res.send('NeuralOps Backend is LIVE 🚀');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

