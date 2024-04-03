const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        username: String,
        email: String,
        password: String,
        age: Number
    }
);

module.exports = UserSchema;