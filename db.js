const mongoose = require('mongoose');
const mongoUrl = "mongodb://localhost:27017/hotel";

mongoose.connect(mongoUrl);

const db = mongoose.connection;

db.on('connected',()=>{
    console.log("Database server is connected successfully")
});
db.on('disconnected',()=>{
    console.log("Database server got disconnected as no CRUD operations are gonna save");

})
db.on('error',()=>{
    console.log("Internal server error !! Unable to connect database server")
});

module.exports = db;