import React from 'react';
import hamburger from '../images/hamburger.png';
import './NavBar.css';


export default function NavBar() {
    return (
        <div>
           <nav className="myNav">
            <button className="burgerButton">
                <img className ="burger"src={hamburger} alt="hamburger"/>
            </button>
           </nav>

           <main className="navMenu">
            <h4><a href="/">home</a></h4>
            <h4><a href="/">portfolio</a></h4>
            <h4><a href="/">services</a></h4>
            <h4><a href="/">contact</a></h4>



           </main>
        </div>
    );
}