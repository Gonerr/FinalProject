const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./db');
const Movie = require('./models/movie');
const Ticket = require('./models/ticket');
const Review = require('./models/review'); // Импортируем модель Review

const app = express();

// app.use(cors({
//     origin: ['http://localhost:3000', 'http://localhost:3001', 'http://localhost:8081', 'exp://192.168.1.131:8081'],
//     methods: ['GET', 'POST', 'PUT', 'DELETE'],
//     allowedHeaders: ['Content-Type']
// }));
app.use(cors());
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

// Get top grossing movies
// http://localhost:3000/api/movies/top-grossing
app.get('/api/movies/top-grossing', async (req, res) => {
    try {
        const result = await Ticket.aggregate([
            {
                $lookup: {
                    from: "movies",
                    localField: "movie",
                    foreignField: "_id",
                    as: "movieDetails"
                }
            },
            {
                $unwind: "$movieDetails"
            },
            {
                $group: {
                    _id: "$movie",
                    title: { $first: "$movieDetails.title" },
                    rating: { $first: "$movieDetails.rating" },
                    totalRevenue: { $sum: "$totalPrice" }, 
                    totalTickets: { $sum: "$numTickets" },
                    averagePrice: { $avg: "$totalPrice" }
                }
            },
            {
                $match: { totalRevenue: { $gt: 0 } }
            },
            {
                $sort: { totalRevenue: -1 }
            }
        ]);

        res.json(result);
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

// Add a new review
app.post('/api/reviews', async (req, res) => {
    const { filmId, source, reviewText, rating, avatar, reviewDate } = req.body;

    if (!filmId || !source || !reviewText || !rating || !avatar || !reviewDate) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newReview = new Review(req.body);

    try {
        const savedReview = await newReview.save();
        res.status(201).json(savedReview);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

// Add a new ticket
app.post('/api/tickets', async (req, res) => {
    const { movieId, date, time, name, email, numTickets, totalPrice } = req.body;

    if (!movieId || !date || !time || !name || !email || !numTickets || !totalPrice) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    const newTicket = new Ticket({
        movie: new mongoose.Types.ObjectId(movieId),
        date,
        time,
        name,
        email,
        numTickets,
        totalPrice
    });

    try {
        const savedTicket = await newTicket.save();
        res.status(201).json(savedTicket);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


app.listen(3000, () => {
    console.log('Server is running on port 3000');
});