import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import style from './Movies.module.css'
import Filter from "../../UI/Filter/Filter";

const Movies = () => {
    const navigate = useNavigate();
    const handleMovieClick = (id) => {
        navigate(`/movie/${id}`); // Переход на страницу фильма с передачей id
    };
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        // Retrieve all movies
        fetch('http://localhost:3000/api/movies')
            .then(response => response.json())
            .then(data => setMovies(data))
            .catch(error => console.error('Error fetching movies:', error));
        }, []);

    return (
        <body>
        <Header/>
        <div className={style.container14}>
            <div className={`${style.gallery3} thq-section-padding`}>
                <div className={`${style.maxWidth} thq-section-max-width`}>
                    <div className={style.sectionTitle}>
                        <Filter rootClassName="itemrootClassName1"></Filter>
                        <div className={`${style.item} service`}>
                            <div className={style.details}>
                                <span className={style.text23}>Filter by</span>
                                <span className={style.text24}>item</span>
                            </div>
                            <svg viewBox="0 0 1024 1024" className={style.icon20}>
                                <path
                                    d="M298.667 341.333h323.669l-353.835 353.835c-16.683 16.683-16.683 43.691 0 60.331s43.691 16.683 60.331 0l353.835-353.835v323.669c0 23.552 19.115 42.667 42.667 42.667s42.667-19.115 42.667-42.667v-426.667c0-5.803-1.152-11.307-3.243-16.341s-5.163-9.728-9.216-13.781c-0.043-0.043-0.043-0.043-0.085-0.085-3.925-3.925-8.619-7.083-13.781-9.216-5.035-2.091-10.539-3.243-16.341-3.243h-426.667c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
                            </svg>
                        </div>
                    </div>
                    <div className={`${style.listOfMovies} thq-grid-4`}>
                        {movies.map(movie => (
                            // При нажатии на постер - переход на страницу movie
                            <div key={movie._id} className={style.movie}
                                 onClick={() =>
                                     handleMovieClick(movie._id)
                            }>
                                <img
                                    alt={movie.title}
                                    src={movie.poster}
                                    className={`${style.image} thq-img-ratio-16-9`}
                                />
                                {/*Появление названия фильма*/}
                                <div className={style.movieTitle}>{movie.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </body>
    );
};

export default Movies;