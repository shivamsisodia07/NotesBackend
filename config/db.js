const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const con = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Mongo Connected Successfully`);
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}

module.exports = connectDB;