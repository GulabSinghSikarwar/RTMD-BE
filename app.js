// app.js

const express = require('express');

require('dotenv').config({ path: './config/server.env' }); // Load environment variables from server.env file
 // Load environment variables from .env file

const database = require('./database/connection'); // Import the database connection setup
const app = express();

// const authRoutes = require('./routes/auth');
// Middleware to parse JSON bodies of incoming requests
app.use(express.json());

// Mount authentication routes
// app.use('/auth', authRoutes);

// Other middleware and route handlers can be added here
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

module.exports = app;
