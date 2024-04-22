const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true // Asigură că fiecare nume de utilizator este unic
    },
    email: {
        type: String,
        required: true,
        unique: true // Asigură că fiecare adresă de email este unică
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;