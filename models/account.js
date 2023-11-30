// passport config
// Use the existing connection
// The Account model

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose");
const accountSchema = new Schema({
    username: {
        type: String,
        required: [true, "Username is required"],
        unique: [true, "Username must be unique"],
        minlength: [5, "Username must be at least 4 characters long"],
        maxlength: [15, "Username cannot be longer than 20 characters"],
      },
      password: {
        type: String,
        required: [true, "Password is required"],
        minlength: [5, "Password must be at least 2 characters long"],
        maxlength: [250, "Password cannot be longer than 255 characters"],
      },
});
accountSchema.plugin(passportLocalMongoose);
// We export the Schema to avoid attaching the model to the
// default mongoose connection.
module.exports = mongoose.model("Account", accountSchema);
