const express = require('express');
const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: "Ajit Server API चल रहा है!" });
});

module.exports = app;
