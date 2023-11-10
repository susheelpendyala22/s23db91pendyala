var express = require("express");
const animal_controllers = require("../controllers/animal");
var router = express.Router();
// GET animal
router.get("/", animal_controllers.animal_view_all_Page);
module.exports = router;

// GET request for one costume.
router.get('/animals/:id', animal_controllers.animal_detail);


router.put('/animals/:id', animal_controllers.animal_update_put);


