// app.js
const express = require('express');
const mongoose = require('mongoose');
const session = require('express-session');
const flash = require('connect-flash');
const authRoutes = require('./routes/auth');
const uploadRoutes = require('./routes/uploads');

const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// Configure session
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

// Configure flash messages
app.use(flash());

// Connect to MongoDB
mongoose.connect('mongodb://localhost/image-upload-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/auth', authRoutes);
app.use('/uploads', uploadRoutes);

// Home Route
app.get('/', (req, res) => {
  res.render('index');
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
