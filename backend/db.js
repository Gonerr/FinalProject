const mongoose = require('mongoose');

const connectDB = async () => {
    const DATABASE_URL = 'mongodb+srv://AdminDB:passwordDB@cluster0.flonx.mongodb.net/WebTrain?retryWrites=true&w=majority&appName=Cluster0';
    try {
        await mongoose.connect(DATABASE_URL);
        console.log('MongoDB connected successfully');
    } catch (error) {
        console.error('MongoDB connection error:', error);
        process.exit(1);
    }
};

// Слушатели событий подключения
mongoose.connection.on('error', (err) => {
    console.error('MongoDB connection error:', err);
});
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});
mongoose.connection.on('reconnected', () => {
    console.log('MongoDB reconnected');
});

// Корректное закрытие соединения при завершении приложения
process.on('SIGINT', async () => {
    await mongoose.connection.close();
    process.exit(0);
});

module.exports = connectDB;





