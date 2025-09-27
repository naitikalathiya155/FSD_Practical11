// app.js
const express = require('express');
const homeRouter = require('./routes/home');

const app = express();

// middleware (JSON parsing if needed)
app.use(express.json());

// routes
app.use('/home', homeRouter);

// app.js (add near top, after const app = express();)
app.get('/', (req, res) => {
  // redirect root to /home
  res.redirect(302, '/home');
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// error handler
app.use((err, req, res, next) => {
  console.error(err);
  res.status(err.status || 500).json({
    error: err.message || 'Internal Server Error'
  });
});

module.exports = app;