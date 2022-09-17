require('dotenv').config();
let mongoose = require("mongoose");

//connecting to the database
let url = `mongodb+srv://tnyamuda:${process.env.PASSWORD}@cluster0.vpaqxqq.mongodb.net/?retryWrites=true&w=majority`;


module.exports.connect = () => {
    try {
        mongoose.connect(url);

    } catch (error) {

        console.log("Failed to connect to the database")
    }
}