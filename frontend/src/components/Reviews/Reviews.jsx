import React, { useState, useEffect } from 'react';
import style from './Reviews.module.css';
import Review from "../Review/Review";
import PropTypes from "prop-types";

const Reviews = ({ movieId }) => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        // Пример вызова API для получения отзывов
        fetch(`/api/movies/${movieId}/reviews`)
            .then(response => response.json())
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, [movieId]);

    return (
        <div className="thq-section-padding">
            <div className={style.maxWidth}>
                <div className={style.container}></div>
                <div className={`${style.container2} thq-grid-2`}>
                    {reviews.map(review => (
                        <Review
                            key={review.id}
                            avatar={review.avatar}
                            name={review.name}
                            rating={review.rating}
                            text={review.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

Reviews.propTypes = {
    movieId: PropTypes.string.isRequired,
};

export default Reviews;
