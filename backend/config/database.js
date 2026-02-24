// database.js

const mongoose = require('mongoose');

const uri = 'mongodb://username:password@localhost:27017/mydatabase'; // replace with your MongoDB URI

const connectDB = async () => {
    try {
        await mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection failed:', error);
        process.exit(1);
    }
};

module.exports = connectDB;