import React from 'react';
import PropTypes from 'prop-types';
import style from'./Review.module.css';

const Review = ({ avatar, name, rating, text, date }) => {
    return (
        <div className={`${style.card} thq-card`}>
            <div className={style.top}>
                <div className={style.avatar}>
                    <img src={avatar} alt={`Avatar of ${name}`} className={style.image}/>
                </div>
                <div className={style.container2}>
                    <div className={style.container3}>
                        <strong className={style.name}>{name}</strong>
                        <span className={style.date}>{date}</span>
                    </div>

                    <div className={style.rating}>
                        {Array.from({length: 5}, (_, i) => (
                            <span key={i} className={`star ${i < rating ? 'filled' : ''}`}>★</span>
                        ))}
                    </div>
                </div>
            </div>
            <div className={style.details}>
                <p className={style.text}>{text}</p>
            </div>
        </div>
    );
};

Review.propTypes = {
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
};

export default Review;
