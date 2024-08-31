const { default: mongoose } = require("mongoose");

const registrationUserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const registeredUser = mongoose.model('registeredUsers',
    registrationUserSchema
);

module.exports = registeredUser