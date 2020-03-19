import React from 'react';
import Linkedin_icon from '../images/Linkedin_icon.png';
import github from '../images/github.png';



export default function Footer() {
    return (
        <>
        <div className="footer">
            <item>
                <img className="footer_icon" src={Linkedin_icon} />
                <a href="https://www.linkedin.com/in/vicky-vasilopoulou-52230111b/">Linkedin</a></item>
            <item>
                <img className="footer_icon" src={github} />
                <a href="https://github.com/Viki-Robles">GitHub</a></item>
            <item>Email</item>
            </div>
    </>
    );
}