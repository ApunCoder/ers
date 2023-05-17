const mongoose = require('mongoose');

// connection string of moongodb atlas
mongoose.connect(`${process.env.MONGO_URI}/ers`);

const db = mongoose.connection;

// show error if it is not connected to db
db.on('error', console.error.bind(console, "Error Connecting to MongoDB"));

// show successful message on console if DB is connected successfully
db.once('open', function(){
    console.log("Connected to Database :: MongoDB");
});

module.exports = db;