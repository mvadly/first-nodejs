import mongoose, { ConnectOptions } from "mongoose";
const dotenv = require('dotenv')
dotenv.config();

const mongo = mongoose.connect(process.env.MONGODB_URI!, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
} as ConnectOptions).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB', err);
    process.exit
});

module.exports = mongo