const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const authRoutes = require('./auth');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static('views')); // Servirea fișierelor statice din directorul 'views'

// Routes
app.use('./auth', authRoutes);

// MongoDB connection
mongoose.connect('mongodb+srv://robiroby792:5bjs65X2rlPBf7OZ@firma.w1worwe.mongodb.net/', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));