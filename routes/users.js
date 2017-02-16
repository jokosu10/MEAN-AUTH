const express = require('express');
const router  = express.Router();

// set route register
router.get('/register', (req, res, next) => {
  res.send('REGISTER');
});

// set route authenticate
router.post('/authenticate', (req, res, next) => {
  res.send('AUTHENTICATE');
});

// set route profile
router.get('/profile', (req, res, next) => {
  res.send('PROFILE');
});

// set route validation
router.get('/validate', (req, res, next) => {
  res.send('VALIDATE');
});

module.exports = router;
