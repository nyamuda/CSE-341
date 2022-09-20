let express = require("express");
let router = express.Router();
let controllers = require("../controllers/")



router.route("")
    .get(controllers.getAllContacts)
    .post(controllers.addNewContact)




router.route("/:id")
    .get(controllers.getContactById)
    .put(controllers.updateContact)
    .delete(controllers.deleteContact);



module.exports = router;