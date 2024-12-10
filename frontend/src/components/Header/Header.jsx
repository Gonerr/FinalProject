import React, {useState} from 'react';
import style from './Header.module.css';
import '../../style.css'
import hamburger from '../../data/hamburger1.png'
import {Link} from "react-router-dom";

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => { setMenuOpen(!menuOpen);}

    return (
        <header className={style.header}>
            <header data-thq="thq-navbar" className={style.navbarInteractive}>
                <div className={style.branding}>
                    <Link to="/">
                        <svg width="24" height="24" viewBox="0 0 24 24" className={style.logo}>
                            <g fill="none" color="currentColor" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                                <circle r="8.5" cx="10.5" cy="10.5"></circle>
                                <path d="M10.5 10.5h.008M14 7l-1 1m-5 5l-1 1m7 0l-1-1M8 8L7 7m6.5 11.5l5.823-.965C20.719 17.292 22 18.35 22 19.75c0 1.243-1.021 2.25-2.281 2.25H18.7"></path>
                            </g>
                        </svg>
                    </Link>
                </div>
                <div className={style.items}>
                    <div className={style.links}>
                        <Link to="/" className={`${style.text} nav-link`}>Home</Link>
                        <Link to="/movies" className={`${style.text} nav-link`}>Movies</Link>
                        <Link to="/" className={`${style.text} nav-link`}>Reviews</Link>
                    </div>
                    <Link to="/ticket">
                        <button className={`${style.button} start-button button`}>
                            <span className={style.text17}>Buy a ticket</span>
                        </button>
                    </Link>
                </div>

                <div data-thq="thq-burger-menu" className={style.burgerMenu}>
                    <button className={`${style.button2} button`} onClick={toggleMenu}>
                        <img alt="logo" src={hamburger} className={style.image}/>
                        <span className={style.text18}>Start a project</span>
                    </button>
                </div>

                {/*Мобильное меню*/}
                <div data-thq="thq-mobile-menu" className={`${style.mobileMenu} ${menuOpen ? style.open : ''}`}>
                    <div data-thq="thq-mobile-menu-nav" data-role="Nav" className={style.nav}>
                        <div className={style.top}>
                            {/*Лого сайта*/}
                            <Link to="/" onClick={toggleMenu} className={style.branding2}>
                                <svg width="48" height="48" viewBox="0 0 48 48" className={style.icon13}>
                                    <g fill="none" stroke="currentColor" strokeWidth="4">
                                        <path  d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4S4 12.954 4 24s8.954 20 20 20Z" strokeLinejoin="round"></path>
                                        <path d="M24 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm0 18a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm-9-9a3 3 0 1 0 0-6a3 3 0 0 0 0 6Zm18 0a3 3 0 1 0 0-6a3 3 0 0 0 0 6Z" strokeLinejoin="round"></path>
                                        <path d="M24 44h20" strokeLinecap="round"></path>
                                    </g>
                                </svg>
                                <span className={style.company1}>FILMS</span>
                            </Link>
                            {/*Кнопка для закрытия меню*/}
                            <div data-thq="thq-close-menu" className={style.menuClose} onClick={toggleMenu}>
                                <svg viewBox="0 0 1024 1024" className={style.icon18}>
                                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                                </svg>
                            </div>
                        </div>
                        {/*При нажатии на страницы - мобильное меню закрывается*/}
                        <div className={style.items2}>
                            <div className={style.links2}>
                                <div className={style.container2}>
                                    <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
                                </div>
                                <div className={style.container2}>
                                    <Link to="/movies" className="nav-link" onClick={toggleMenu}>Movies</Link>
                                </div>
                                <div className={style.container4}>
                                    <Link to="/" className="nav-link" onClick={toggleMenu}>Reviews</Link>
                                </div>
                            </div>
                        </div>
                        <button className={`${style.button3} start-button button`}>
                            <span className={style.text22}>Buy a ticket</span>
                        </button>
                    </div>
                </div>

            </header>
        </header>
    );
};

export default Header;