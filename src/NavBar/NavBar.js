import React from 'react';
import hamburger from '../images/menuicon.svg';
import './NavBar.css';



export default function NavBar() {
    const [menuDisplay, setMenuDisplay] = React.useState("menuDisplayoff");

    function toggleMenu() {
        setMenuDisplay(menuDisplay === "menuDisplayoff" ? "" : "menuDisplayoff")
    }

    return (
        <div>

            <nav className="myNav">
                <button className="burgerButton" onClick={() => toggleMenu()}>
                    <img className="burger" src={hamburger} alt="hamburger" />
                </button>
            </nav>
            <main className="navMenu" id={menuDisplay}>
            
                <h4 className="menuItem"><a href="/portfolio" onClick={() => toggleMenu()}>portfolio</a></h4>
                <h4 className="menuItem"><a href="/services" onClick={() => toggleMenu()}>services</a></h4>
                <h4 className="menuItem"><a href="/contact" onClick={() => toggleMenu()}>contact</a></h4>


            </main>


        </div>

    );
}


