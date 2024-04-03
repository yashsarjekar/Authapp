const UserSchema = require("../schemas/UserSchema");
const mongoose = require("mongoose");


const User = mongoose.model('users', UserSchema);
module.exports = User;