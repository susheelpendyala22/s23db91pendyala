var express = require("express");
const animal_controllers = require("../controllers/animal");
var router = express.Router();
// GET animal
router.get("/", animal_controllers.animal_view_all_Page);
/* GET detail costume page */
router.get('/detail', animal_controllers.animal_view_one_Page);
/* GET create costume page */
router.get('/create', animal_controllers.animal_create_Page);
/* GET create update page */
router.get('/update', animal_controllers.animal_update_Page);
/* GET delete costume page */
router.get('/delete', animal_controllers.animal_delete_Page);
module.exports = router;





