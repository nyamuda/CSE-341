let express = require("express");
let router = express.Router();
let controllers = require("../controllers");

router.route("/")
    .get(controllers.homeView)



module.exports = router;