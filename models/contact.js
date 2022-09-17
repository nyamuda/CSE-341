let mongoose = require("mongoose");



//creating a schema for contacts collection
let contactsSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    favoriteColor: String,
    birthday: Date
}, { timestamps: true })


let Contact = mongoose.model("Contact", contactsSchema);

module.exports = Contact;