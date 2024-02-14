const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstname: String,
    lastname: String,
    name: String,
    cartaocidadao: String,
    nif: String,
    morada: String,
    codigopostal: String,
    freguesia: String,
    bdate: String,
    email: String,
    mobile: Number,
    accepted: Boolean,
    level: String,
    notifications: Boolean,
    username: {
        type: String,
        unique: true
    },
    password: String,
    registration_date: {
        type: Date,
        default: Date.now
    },

});

module.exports = mongoose.model('user', userSchema);
