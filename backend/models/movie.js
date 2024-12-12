const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: { type: String, required: true },
    genre: String,
    year: Number,
    duration: Number,
    rating: Number,
    poster: { type: String, required: true },
    director: String,
    description: String
});

module.exports = mongoose.model('movies', movieSchema);