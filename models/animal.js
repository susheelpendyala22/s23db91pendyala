const mongoose = require("mongoose")
const animalSchema = mongoose.Schema({
    animalName:{type:String,required:true},
    Description: {type:String,required:true},
    animalCost: {type:Number,required:true,min:0,max:1000},
})
module.exports = mongoose.model("animal",animalSchema)