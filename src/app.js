const express = require('express');

function createApp() {
  const app = express();
  app.use(express.json());

  app.get('/health', (req, res) => {
    res.json({ status: 'ok', uptime: process.uptime() });
  });

  app.get('/reverse/:text', (req, res) => {
    const reversed = req.params.text.split('').reverse().join('');
    res.json({ input: req.params.text, output: reversed });
  });

  app.get('/uppercase/:text', (req, res) => {
    res.json({ input: req.params.text, output: req.params.text.toUpperCase() });
  });

  app.get('/palindrome/:text', (req, res) => {
    const normalized = req.params.text.toLowerCase().replace(/[^a-z0-9]/g, '');
    const isPalindrome = normalized === normalized.split('').reverse().join('');
    res.json({ input: req.params.text, isPalindrome });
  });

  app.use((req, res) => {
    res.status(404).json({ error: 'Not found' });
  });

  return app;
}

module.exports = { createApp };
