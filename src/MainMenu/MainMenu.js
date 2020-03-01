import React from 'react';
import kodflix_image from '../images/kodflix.png';
import './MainMenu.css';


export default function MainMenu() {
    return (
        <>
            <h3 className="portfolio_name">PORTFOLIO</h3>
            <div className="portfolio_main">
            <img className="kodflix_image" src={kodflix_image} alt="kodflix_image"/>
        </div>
        </>
    );

    
}