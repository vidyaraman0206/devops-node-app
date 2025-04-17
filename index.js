const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Welcome to the DevOps Demo today! Today is Thursday 2025!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});