import React, {useEffect, useState} from 'react';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import AboutMovie from "../../AboutMovie/AboutMovie";
import ContactForm from "../../ContactForm/ContactForm";
import './Movie.css'
import Reviews from "../../Reviews/Reviews";
import {useParams} from "react-router-dom";

const Movie = () => {
    const { id } = useParams(); // Получаем id фильма из URL
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:3000/api/movies/${id}`)
            .then(response => response.json())
            .then(data => setMovie(data))
            .catch(error => console.error('Error fetching movie:', error));
    }, [id]);


    return (
        <body >
            <Header/>
            <div className="movies">
                {movie && <AboutMovie movie={movie} />} {/* Передаем данные о фильме в AboutMovie */}
                <div className="aboutmovie">
                    <ContactForm
                        rootClassName="rootClassName"
                        id={id}
                    />
                    <div className="aboutmoviepicture"></div>
                </div>
                {movie && <Reviews id={id} />}
                <Footer/>
            </div>
        </body>
    );
};

export default Movie;

