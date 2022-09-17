let express = require("express");
let router = express.Router();
let controllers = require("../controllers/")



router.route("")
    .get(controllers.getAllContacts);



router.route("/:id")
    .get(controllers.getContactById);


module.exports = router;