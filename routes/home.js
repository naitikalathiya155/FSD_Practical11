// routes/home.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.type('html').send('<h1>Welcome to the Dashboard Template</h1><p>This will server as the base for future web apps.</p>');
});

module.exports = router;
