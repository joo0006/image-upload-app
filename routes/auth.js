// routes/auth.js
const express = require('express');
const router = express.Router();
const User = require('../models/user');

// Signup Route
router.get('/signup', (req, res) => {
  res.render('signup');
});

router.post('/signup', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = new User({ email, password });
    await user.save();
    res.redirect('/login');
  } catch (error) {
    console.error(error);
    res.status(500).send('Error signing up');
  }
});

// Login Route
router.get('/login', (req, res) => {
  res.render('login');
});

router.post('/login', (req, res) => {
  // Implement login logic
});

module.exports = router;

