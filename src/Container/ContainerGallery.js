import React from 'react';
import Container from './Container';
import './Container.css';


export default function ContainerGallery (props) {
    return (
        <div>
            <div className="container">
                    <img src={logo.name}/>
                    <h4>{props.title}</h4>  
            </div>
        </div>
    );
}