// database/index.js

const { Sequelize } = require('sequelize');
const dotenv = require('dotenv');

// Load environment variables from server.env file
const result = dotenv.config({ path: './config/server.env' });

if (result.error) {
  console.error('Error loading server.env file:', result.error);
} else {
  console.log('server.env file loaded successfully');
}

// Create Sequelize instance with environment variables
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});

// Test the database connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log('Database connection successful.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}

// Call testConnection to check if the connection is successful
testConnection();

module.exports = sequelize;
