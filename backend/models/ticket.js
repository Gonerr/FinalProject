const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'movies', required: true },
    showtime: Date,
    seat: String,
    price: Number,
    buyer: String
});

module.exports = mongoose.model('tickets', ticketSchema);