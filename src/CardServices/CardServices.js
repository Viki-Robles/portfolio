import React from 'react';

export default function CardServices(props) {
    return (
        <>
            <div className="pricing">
                <div className="pricingBox">{props.pricingBox}
                    <h2>{props.titlePricing}</h2>
                    <div className="">{props.detailsPricing}</div>
                </div>
            </div>

        </>
    );
}