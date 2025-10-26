const mongoose = require('mongoose');
require('dotenv').config();

//const mongoUrl = process.env.DB_URL_LOCAL;
const mongoUrl = process.env.DB_URL;

// connect to MongoDB Atlas
mongoose.connect(mongoUrl, {
  serverSelectionTimeoutMS: 10000, // wait 10s before failing
});

const db = mongoose.connection;

db.on('connected', () => {
    console.log("✅ Database server is connected successfully");
});

db.on('disconnected', () => {
    console.log("⚠️ Database server got disconnected");
});

db.on('error', (err) => {
    console.error("❌ Internal server error !! Unable to connect database server", err);
});

module.exports = db;
