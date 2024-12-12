import React, { useState, useEffect } from 'react';
import style from './Reviews.module.css';
import Review from "../Review/Review";


const Reviews = ({ id }) => {
    const [reviews, setReviews] = useState([]);

    console.log(id);
    // To get server feedback for a specific movie
    useEffect(() => {
        fetch(`http://localhost:3000/api/movies/${id}/reviews`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => setReviews(data))
            .catch(error => console.error('Error fetching reviews:', error));
    }, [id]);

    return (
        <div className="thq-section-padding">
            <div className={style.maxWidth}>
                {/*<div className={style.container}></div>*/}
                <div className={`${style.container2} thq-grid-2`}>
                    {reviews.map(review => (
                        <Review
                            key={review.id}
                            avatar={review.avatar}
                            name={review.source}
                            rating={review.rating}
                            text={review.reviewText}
                            date={review.reviewDate}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Reviews;
