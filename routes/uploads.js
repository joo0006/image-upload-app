// routes/uploads.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const path = require('path');

// Set up multer storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Upload Route
router.get('/upload', (req, res) => {
  res.render('upload');
});

router.post('/upload', upload.single('image'), (req, res) => {
  // Handle image upload
});

module.exports = router;


