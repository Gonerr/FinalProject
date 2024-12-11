const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: String,
    year: Number,
    duration: Number,
    rating: Number
});

module.exports = mongoose.model('movies', movieSchema);