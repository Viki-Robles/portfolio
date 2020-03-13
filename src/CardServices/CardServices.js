import React from 'react';
import './CardServices.css';

export default function CardServices(props) {
    return (
        <>
            
                <div className="pricingBox">{props.pricingBox}
                    <h2>{props.titlePricing}</h2>
                    <div className="">{props.detailsPricing}</div>
                </div>
            

        </>
    );
}