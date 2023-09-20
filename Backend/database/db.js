const mongoose = require('mongoose');

const dotenv = require('dotenv');

dotenv.config();

const connectDB = () => {
    const DB_URI = `mongodb+srv://${process.env.db_UserName}:${process.env.db_Password}@jwtauth.ipkq5yt.mongodb.net/?retryWrites=true&w=majority`

    mongoose.connect(DB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })

    mongoose.connection.on('connected', () => {
        console.log('MongoDB connection established successfully');
    })

    mongoose.connection.on('disconnected', () => {
        console.log('MongoDB connection disconnected');
    })

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB connection error. Please make sure MongoDB is running. ' + err);
        process.exit();
    })
}

module.exports = connectDB;