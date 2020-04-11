import React from 'react';
import './CardServices.css';


export default function CardServices(props) {
    return (
        <>
            <div className="pricingBox">{props.pricingBox}
                <div className="servicesBox">
                    <h2 className="titlePricing">{props.titlePricing}</h2>
                    <img className="icon" src={props.icon} alt="icon"/>
                    <p className="pricingFeauture">{props.pricingFeauture}</p>
                </div>
            </div>
        </>
    );
}