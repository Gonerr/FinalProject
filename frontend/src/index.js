import React from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './style.css'
import reportWebVitals from './reportWebVitals';
import HomePage from "./components/Pages/HomePage/HomePage"
import Movies from "./components/Pages/Movies/Movies";

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
    <React.StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/movies" element={<Movies />} />
                {/*    /!* <Route path="/about" element={<About />} /> *!/*/}
                {/*    /!* <Route path="/contacts" element={<Contacts />} /> *!/*/}
            </Routes>
        </Router>
    </React.StrictMode>
);

reportWebVitals();
