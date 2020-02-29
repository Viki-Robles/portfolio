import React from 'react';
import hamburger from '../images/hamburger.png';
import './NavBar.css';


export default function NavBar() {
    return (
        <div>
           <main className="myNav">
            <button>
                <img className ="burger"src={hamburger} alt="hamburger"/>
            </button>
           </main>
        </div>
    );
}