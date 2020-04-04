import React from 'react';


export default function MySkills(props) {
    return (
        <div className="myskills">
            <li>
                <h3>{props.skills}</h3>
                <span className="bar"><span className={props.skills}></span></span>
            </li>
        </div>
    );
}