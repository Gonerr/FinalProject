import React, {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import style from './Movies.module.css'
import Filter from "../../UI/Filter/Filter";

const Movies = () => {
    const navigate = useNavigate();
    const handleMovieClick = (id) => {
        navigate(`/movie/${id}`); // Go to the movie page with passing id
    };
    const [movies, setMovies] = useState([]);

    const [filteredMovies, setFilteredMovies] = useState([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOrder, setSortOrder] = useState('');

    useEffect(() => {
        // Retrieve all movies
        fetch('http://localhost:3000/api/movies')
            .then(response => response.json())
            .then(data => {
                setMovies(data);
                setFilteredMovies(data);
            })
            .catch(error => console.error('Error fetching movies:', error));
        }, []);

    // Search for a movie by title
    const handleSearch = (query) => {
        setSearchQuery(query);
        const filtered = movies.filter(movie =>
            movie.title.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredMovies(filtered);
    };

    // Sorting movies by year
    const handleSort = (order) => {
        setSortOrder(order);
        const sorted = [...filteredMovies];
        if (order === 'newest') {
            sorted.sort((a, b) => b.year - a.year);
        } else if (order === 'oldest') {
            sorted.sort((a, b) => a.year - b.year);
        }
        setFilteredMovies(sorted);
    };

    return (
        <body>
        <Header/>
        <div className={style.container14}>
            <div className={`${style.gallery3} thq-section-padding`}>
                <div className={`${style.maxWidth} thq-section-max-width`}>
                    <div className={style.sectionTitle}>
                        <Filter
                            onSearch={handleSearch}
                            onSort={handleSort}
                        />
                    </div>
                    <div className={`${style.listOfMovies} thq-grid-4`}>
                        {filteredMovies.map(movie => (
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