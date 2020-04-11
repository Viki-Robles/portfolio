import React from 'react';
import './MySkills.css';


export default function MySkills(props) {
    return (
        <div className="myskills">
            <div className="mySkillsBorder">
                <img src={props.logo} />
                </div>
            </div>
      
    );
}