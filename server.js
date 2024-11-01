const express = require('express');
const app = express();
const PORT = 3000;

app.get('/api/midterm', (req, res) => {
    res.send('Midterm Exam ITP 314');
  });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});