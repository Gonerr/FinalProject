import React from 'react';
import style from './HomePage.module.css';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import '../../../style.css'
import Gallery from "../../Gallery/Gallery";


const HomePage = () => {
    return (
        <div className={style.home}>
            <title>Films - main</title>
            <meta property="og:title" content="Films - main"/>
            <Header/>

            <header className={style.hero}>
                <div className={style.header2}>
                    <h1 className={style.title}>Create new experiences with us</h1>
                    <p className={style.description1}>
                        Explore the latest blockbusters and classic movies by buying tickets
                        from us and sharing reviews of the films you&apos;ve seen
                    </p>
                </div>
            </header>

            <div className={style.about}>
                <div className={style.header3}>
                    <div className={style.container5}>
                        <div className={style.container6}>
                            <h2 className={style.company2}>Discover the magic</h2>
                            <h1 className={style.text23}>
                                Your ultimate movie experience awaits
                            </h1>
                            <button className={`${style.button4} start-button button`}>
                                <span className={style.text24}>Buy a ticket</span>
                            </button>
                        </div>
                        <span className={style.description2}>
                          Immerse yourself in the world of cinema with Films, a website
                          dedicated to providing a one-of-a-kind movie experience in St
                          Petersburg. Discover a wide range of films, purchase tickets for
                          the latest blockbusters, exchange reviews, and interact with a
                          vibrant community of film aficionados. Embark on your cinematic
                          adventure today!
                        </span>
                    </div>
                </div>
            </div>

            <Gallery
                text={"ALL MOVIES"}
                content1={"Browse through a stunning collection of movie posters from various genres and eras. Find your favorites and get ready for an immersive cinema experience."}
                heading1={"Explore Our Movie Gallery"}
            ></Gallery>

            <Footer/>
        </div>
    )
};

export default HomePage;