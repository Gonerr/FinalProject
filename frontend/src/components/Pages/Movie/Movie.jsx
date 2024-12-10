import React from 'react';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import AboutMovie from "../../AboutMovie/AboutMovie";
import ContactForm from "../../ContactForm/ContactForm";
import './Movie.css'
import Reviews from "../../Reviews/Reviews";
const Movie = () => {
    return (
        <body >
            <Header/>
            <div className="movies">
            <AboutMovie/>
            <div className="aboutmovie">
                <ContactForm
                    rootClassName="rootClassName"
                />
                <div className="aboutmoviepicture"></div>
            </div>
            <Reviews/>

            <Footer/>
            </div>
        </body>
    );
};

export default Movie;

