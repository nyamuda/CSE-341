let Contact = require("../models/contact");


//get all contact documents
module.exports.getAllContacts = async function(req, res) {
    let allContacts = await Contact.find({});
    return res.json(allContacts);
}

//get contact by id
module.exports.getContactById = async function(req, res) {
    let id = req.params.id;
    let contact = await Contact.findById(id);
    return res.json(contact);
}