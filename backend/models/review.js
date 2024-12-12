const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    filmId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Movie',
        required: true
    },
    source: {
        type: String,
        required: true
    },
    reviewText: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true
    },
    avatar: {
        type: String,
        required: true
    },
    reviewDate: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('Review', reviewSchema);
