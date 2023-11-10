const mongoose = require("mongoose")
const animalSchema = mongoose.Schema({
    animalName: String,
    Description: String,
    animalCost: String
})
module.exports = mongoose.model("animal",
    animalSchema)