const mongoose = require('mongoose');

const ticketSchema = new mongoose.Schema({
    movie: { type: mongoose.Schema.Types.ObjectId, ref: 'Movie', required: true },
    date: { type: String, required: true },
    time: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true },
    numTickets: { type: Number, required: true },
    totalPrice: { type: Number, required: true }
});

module.exports = mongoose.model('Ticket', ticketSchema);
