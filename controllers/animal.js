var animal = require('../models/animal');
// List of all animal

exports.animal_list = async function (req, res) {
    try {
        theanimal = await animal.find();
        res.send(theanimal);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// VIEWS
// Handle a show all view
exports.animal_view_all_Page = async function (req, res) {
    try {
        theanimal = await animal.find();
        res.render('animal', { title: 'animal Search Results', results: theanimal });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};
// for a specific animal.
exports.animal_detail = function (req, res) {
    res.send('NOT IMPLEMENTED: animal detail: ' + req.params.id);
};
// Handle animal create on POST.
//Handle animal create on POST.
exports.animal_create_post = async function (req, res) {
    console.log(req.body)
    let document = new animal();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"animal_type":"goat", "cost":12, "size":"large"}
    document.animalName = req.body.animalName;
    document.animalCost = req.body.animalCost;
    document.Description = req.body.Description;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// Handle animal delete form on DELETE.
exports.animal_delete = function (req, res) {
    res.send('NOT IMPLEMENTED: animal delete DELETE ' + req.params.id);
};
// Handle animal update form on PUT.
exports.animal_update_put = function (req, res) {
    res.send('NOT IMPLEMENTED: animal update PUT' + req.params.id);
};
