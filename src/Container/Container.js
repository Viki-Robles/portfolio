import React from 'react';
import './Container.css';


// 1. Create a container component that will hold the 2 projects
// 2. Make it an array and then itterate it with .map() method
// 3. Enter the React Router
// 4. Style the CSS of the container with the children
// 5. Add the Services Section
// 6. Add the contact Section
// 7. Final Style

export default function Container(props) {
    return (
        <>
            <div className="box">
                <img src={props.logo} alt={`${props.name} logo`} className="item" />
                <h4>{props.name}</h4>
            </div>
        </>
    );


}

