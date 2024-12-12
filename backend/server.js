const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./db');
const Movie = require('./models/movie');
const Ticket = require('./models/ticket');
const Review = require('./models/review'); // Импортируем модель Review

const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());
// Database connection
connectDB();

// Get all the movies
// http://localhost:3000/api/movies
app.get('/api/movies', async (req, res) => {
    try {
        const movies = await Movie.find();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Retrieving a movie by id
// http://localhost:3000/api/movies
app.get('/api/movies/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) {
            return res.status(404).json({ message: 'Movie not found' });
        }
        res.json(movie);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Get reviews for a specific movie
app.get('/api/movies/:id/reviews', async (req, res) => {
    try {
        const reviews = await Review.find({ filmId: req.params.id });
        if (!reviews || reviews.length === 0) {
            return res.status(404).json({ message: 'Reviews not found' });
        }
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Temporary route to list all reviews for debugging purposes
app.get('/api/reviews', async (req, res) => {
    try {
        const reviews = await Review.find();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});