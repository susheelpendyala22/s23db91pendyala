var express = require("express");
const animal_controllers = require("../controllers/animal");
var passport = require("passport");
var router = express.Router();
const secured = (req, res, next) => {
    if (req.user){
    return next();
    }
    res.redirect("/login");
    }
// GET animal
router.get("/", animal_controllers.animal_view_all_Page);
router.get("/animal/:id", secured, animal_controllers.animal_detail);
/* GET detail costume page */
router.get('/detail', animal_controllers.animal_view_one_Page);
/* GET create costume page */
router.get('/create', animal_controllers.animal_create_Page);
/* GET create update page */
router.get('/update', animal_controllers.animal_update_Page);
/* GET delete costume page */
router.get('/delete', animal_controllers.animal_delete_Page);
router.post('/login', passport.authenticate('local'), function (req, res) {
    if (req.session.returnTo)
        res.redirect(req.session.returnTo);
    res.redirect('/');
});
module.exports = router;





