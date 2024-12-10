import React from 'react';
import style from './AboutMovie.module.css'
import PropTypes from "prop-types";
const AboutMovie = (props) => {
    return (
        <div className={`${style.container10} thq-section-padding`}>
            <div className={`${style.maxWidth} thq-section-max-width`}>
                <div className={style.container11}></div>
                <div className={`${style.container12} thq-flex-column`}>
                    <h2 className={`${style.text10} thq-heading-2`}>
                        {props.heading1 ?? ("Film Name")}
                    </h2>
                    <p className={`${style.text11} thq-body-large`}>
                        {props.content2 ?? ("Rating: 4.5")}
                    </p>
                    <div className={`${style.container13} thq-grid-2`}>
                        <div className={style.container14}>
                            <h2 className={style.text12}>Directed by</h2>
                            <span className={style.text13}>
                                {props.stat1Description ?? ("Total films in our database")}
                              </span>
                        </div>
                        <div className={style.container15}>
                            <h2 className={style.text14}>Genres</h2>
                            <span className={`${style.text15} thq-body-small`}>
                                {props.stat2Description ?? ("Based on user reviews")}
                              </span>
                        </div>
                    </div>
                    <div className={`${style.container16} thq-grid-2`}>
                        <div className={style.container17}>
                            <h2 className={`${style.text16} thq-heading-2`}>
                                {props.stat3 ?? ("Description")}
                            </h2>
                            <span className={`${style.text17} thq-body-small`}>
                                {props.stat3Description ?? ("оашкуоашуо коашукоа кущашокущшоау аушщкоаук кощуа")}
                              </span>
                        </div>
                    </div>
                    <div className={`${style.container18} thq-grid-2`}>
                        <div className={style.container19}>
                            <h2 className={`${style.text18} thq-heading-2`}>
                                {props.stat31 ?? ("Tickets Sold")}
                            </h2>
                            <span className={`${style.text19} thq-body-small`}>
                                {props.stat3Description1 ?? ("Monthly average")}
                              </span>
                        </div>
                    </div>
                    <div className={style.container20}>
                        <button className={`${style.button1} start-button button`}>
                          <span className={style.text20}>
                            {props.text ?? ("Buy a ticket")}
                          </span>
                        </button>
                        <button className={`${style.button2} start-button button`}>
                          <span className={style.text21}>
                            {props.text1 ?? ("back to movies")}
                          </span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

AboutMovie.defaultProps = {
    stat3Description1: undefined,
    text1: undefined,
    stat3: undefined,
    stat3Description: undefined,
    heading1: undefined,
    stat31: undefined,
    stat1Description: undefined,
    text: undefined,
    content2: undefined,
    stat2Description: undefined,
}

AboutMovie.propTypes = {
    stat3Description1: PropTypes.element,
    text1: PropTypes.element,
    stat3: PropTypes.element,
    stat3Description: PropTypes.element,
    heading1: PropTypes.element,
    stat31: PropTypes.element,
    stat1Description: PropTypes.element,
    text: PropTypes.element,
    content2: PropTypes.element,
    stat2Description: PropTypes.element,
}

export default AboutMovie;