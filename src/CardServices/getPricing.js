import React from 'react';
import getCards from './getCards';
import CardsServices from './CardServices';

export default function GetPricing() {
    return (
        <div>

            <div className="pricing"> {
                getCards().map(price => <CardsServices
                    key={price.id}
                    id={price.id}
                    pricingBox={price.pricingBox}
                    h2={price.titlePricing}
                    pricingFeauture={price.pricingFeauture}
                    icon={price.icon}
                />)
            }
            </div>


        </div>
    );
}
