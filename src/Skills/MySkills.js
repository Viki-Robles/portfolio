import React from 'react';
import './MySkills.css';


export default function MySkills(props) {
    return (
        <div className="myskills">
            <div className="skills_icon">
                <p>{props.skills_icon}</p>
                <img src={props.logo} />
            </div>
        </div>
    );
}