import React, {useEffect, useState} from 'react';
import style from './FormBooking.module.css';
import {Link} from "react-router-dom";


const FormBoking = ({ movieId }) => {
    const [movies, setMovies] = useState([]);
    const [selectedMovie, setSelectedMovie] = useState(movieId);

    // All the information that will be recorded on the ticket
    const [date, setDate] = useState('');
    const [time, setTime] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [numTickets, setNumTickets] = useState(1);
    const [price, setPrice] = useState(500);
    const [totalPrice, setTotalPrice] = useState(price * numTickets);

    // This is for the text that tells you that the review has been successfully submitted
    const [isSubmitted, setIsSubmitted] = useState(false);

    // Для вывода названий всех фильмов
    useEffect(() => {
        fetch('http://localhost:3000/api/movies')
            .then(response => response.json())
            .then(data => {
                setMovies(data);
                const selectedMovie = data.find(movie => movie._id === movieId);
                if (selectedMovie) {
                    setPrice(selectedMovie.price);
                    setTotalPrice(selectedMovie.price * numTickets);
                }
            })
            .catch(error => console.error('Error fetching movies:', error));
    }, [movieId, numTickets]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const ticket = {
            movieId: selectedMovie,
            date,
            time,
            name,
            email,
            numTickets,
            totalPrice
        };

        try {
            const response = await fetch('http://localhost:3000/api/tickets', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(ticket)
            });

            if (response.ok) {
                // Successful sending of data
                setIsSubmitted(true);
                // Cleaning the form
                setDate('');
                setTime('');
                setName('');
                setEmail('');
                setNumTickets(1);
                setTotalPrice(price);
            } else {
                alert('Failed to book ticket.');
            }
        } catch (error) {
            console.error('Error booking ticket:', error);
            alert('Failed to book ticket.');
        }
    };

    // To dynamically change the price of tickets
    useEffect(() => {
        const selectedMovieObj = movies.find(movie => movie._id === selectedMovie);
        if (selectedMovieObj) {
            setPrice(selectedMovieObj.price);
            setTotalPrice(selectedMovieObj.price * numTickets);
        }
    }, [selectedMovie, movies, numTickets]);


    return (
        <div className={style.container1}>
            <div className={style.purchaseTicket}>
                <h1 className={`${style.text10} ${style.text18}`}>
                    Ticket purchase
                </h1>
                <form className={style.container2} onSubmit={handleSubmit}>
                    <div className={style.movie1}>
                        <label htmlFor="contact-form-2-email" className={style.text11}>
                            The movie:
                        </label>
                        <select
                            className={`${style.select1} thq-input`}
                            value={selectedMovie}
                            onChange={(e) => setSelectedMovie(e.target.value)}
                        >
                            {movies.map(movie => (
                                <option key={movie._id} value={movie._id}>
                                    {movie.title}
                                </option>
                            ))}
                        </select>

                    </div>
                    <div className={style.container3}>
                        <div className={style.date}>
                            <label htmlFor="contact-form-2-email" className={style.text12}>
                                Date:
                            </label>
                            <input
                                type="date"
                                className={`${style.textinput1} thq-input`}
                                value={date}
                                onChange={(e) => setDate(e.target.value)}
                                required
                            />
                        </div>
                        <div className={style.time}>
                            <label htmlFor="contact-form-2-email" className={style.text13}>
                                Select a time:
                            </label>
                            <input
                                type="time"
                                className={`${style.textinput2} thq-input`}
                                value={time}
                                onChange={(e) => setTime(e.target.value)}
                                required
                            />
                        </div>
                    </div>
                    <div className={style.name}>
                        <label htmlFor="contact-form-2-name" className={`${style.text14} thq-body-small`}>
                            Enter your Name
                        </label>
                        <input
                            type="text"
                            id="contact-form-2-name"
                            placeholder="Name"
                            className={`${style.textInput1} thq-input`}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className={style.email}>
                        <label htmlFor="contact-form-2-name" className={`${style.text15} thq-body-small`}>
                            Enter your Email
                        </label>
                        <input
                            type="email"
                            id="contact-form-2-email"
                            placeholder="Email"
                            className={`${style.textInput2} thq-input`}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className={style.movie2}>
                        <div className={style.container4}>
                            <label htmlFor="contact-form-2-email" className={style.text16}>
                                Number of spectators
                            </label>
                            <select
                                className={`${style.select2} thq-input`}
                                value={numTickets}
                                onChange={(e) => setNumTickets(e.target.value)}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                            </select>

                        </div>
                        <h1 className={style.text17}>
                            <span className={style.text20}>
                                Payable: <span className={style.text22}>${totalPrice}</span>
                            </span>
                        </h1>

                    </div>
                    {isSubmitted ? (
                        <>
                        <div className={style.sendtext}>
                            Your ticket has been successfully booked. We look forward to seeing you at the movie!
                        </div>
                        <Link to={"/movies"} className={style.link}>
                            <button className={`${style.button2} start-button button`}>
                                <span className={style.text21}>back to movies</span>
                            </button>
                        </Link>
                        </>
                    ) : (
                    <button
                        type="submit"
                        className={`${style.button} thq-button-filled`}
                    >
                        <span className={`${style.action1} thq-body-small ${style.text19}`}>
                            Book a ticket
                        </span>
                    </button>)}
                </form>
            </div>
        </div>
    );
};

export default FormBoking;