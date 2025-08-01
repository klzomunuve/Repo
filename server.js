import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

// Simple route
app.get('/', (req, res) => {
  res.send('✅ Server is working with ES Modules!');
});

// Start server
app.listen(port, () => {
  console.log(`🚀 Server is running on port ${port}`);
});
