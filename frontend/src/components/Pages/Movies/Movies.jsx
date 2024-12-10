import React from 'react';
import Header from "../../Header/Header";
import Footer from "../../Footer/Footer";
import style from './Movies.module.css'
import Filter from "../../UI/Filter/Filter";

const Movies = () => {
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
                    <div className={`${style.container15} thq-grid-4`}>
                        <div className={style.container16}>
                            <img
                                alt="Movie Poster 1"
                                src="https://images.unsplash.com/photo-1568038823761-6ce8e1e4334d?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUxNjg0NXw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                                className={`${style.image1} thq-img-ratio-16-9`}
                            />
                        </div>
                        <div className={style.container16}>
                            <img
                                alt="Movie Poster 2"
                                src="https://images.unsplash.com/photo-1670203513741-d2c16938134d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDY3fHxtb3ZpZXxlbnwwfHx8fDE3MzM2MDkwODd8MA&amp;ixlib=rb-4.0.3&amp;w=600"
                                className={`${style.image1} thq-img-ratio-16-9`}
                            />
                        </div>
                        <div className={style.container16}>
                            <img
                                alt="Movie Poster 3"
                                src="https://images.unsplash.com/photo-1724080466058-f709e0306a6d?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDkxfHxtb3ZpZXxlbnwwfHx8fDE3MzM2MDkyMzF8MA&amp;ixlib=rb-4.0.3&amp;w=600"
                                className={`${style.image1} thq-img-ratio-16-9`}
                            />
                        </div>
                        <div className={style.container16}>
                            <img
                                alt="Movie Poster 4"
                                src="https://images.unsplash.com/photo-1523207911345-32501502db22?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUxNjg0N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                                className={`${style.image1} thq-img-ratio-16-9`}
                            />
                        </div>
                        <div className={style.container16}>
                            <img
                                alt="Movie Poster 5"
                                src="https://images.unsplash.com/photo-1711757779023-45febde655a9?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUxNjg0Nnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                                className={`${style.image1} thq-img-ratio-16-9`}
                            />
                        </div>
                        <div className={style.container16}>
                            <img
                                alt="Movie Poster 6"
                                src="https://images.unsplash.com/photo-1625841325387-2ccd4a7bc442?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUxNjg0N3w&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                                className={`${style.image1} thq-img-ratio-16-9`}
                            />
                        </div>
                        <div className={style.container16}>
                            <img
                                alt="Movie Poster 7"
                                src="https://images.unsplash.com/photo-1692486407043-41d418e59680?crop=entropy&amp;cs=tinysrgb&amp;fit=max&amp;fm=jpg&amp;ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTczMzUxNjg0Nnw&amp;ixlib=rb-4.0.3&amp;q=80&amp;w=1080"
                                className={`${style.image1} thq-img-ratio-16-9`}
                            />
                        </div>
                        <div className={style.container16}>
                            <img
                                alt="Movie Poster 8"
                                src="https://images.unsplash.com/photo-1639179084000-9863c6581bba?ixid=M3w5MTMyMXwwfDF8c2VhcmNofDEwM3x8bW92aWV8ZW58MHx8fHwxNzMzNjA5MjQ2fDA&amp;ixlib=rb-4.0.3&amp;w=600"
                                className={`${style.image1} thq-img-ratio-16-9`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
        </body>
    );
};

export default Movies;