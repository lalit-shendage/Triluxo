const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Book = require('./models/Book'); 
const bookRoutes = require('./routes/bookRoutes');

const app = express();

// Connect to MongoDB
mongoose.connect('mongodb://localhost/book_library', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Middleware
app.use(bodyParser.json());

// Define your API routes for CRUD operations
app.use('/', bookRoutes);

// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
