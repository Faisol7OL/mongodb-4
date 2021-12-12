const mongoose = require('mongoose')
const { Schema } = mongoose;

const userSchema = new Schema({
    firstname: String,
    lastname: String
});

exports.userModel = mongoose.model('Users', userSchema);
