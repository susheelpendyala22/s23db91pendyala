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
// for a specific Costume.
exports.animal_detail = async function (req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await animal.findById(req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
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
// Handle Costume update form on PUT.
exports.animal_update_put = async function (req, res) {
    console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await animal.findById(req.params.id)
        // Do updates of properties
        if (req.body.animal_type)
            toUpdate.animal_type = req.body.animal_type;
        if (req.body.animalCost) toUpdate.animalCost = req.body.animalCost;
        if (req.body.Description) toUpdate.Description = req.body.Description;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": ${err}: Update for id ${req.params.id}
failed`);
    }
};

