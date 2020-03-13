import React from 'react';
import getCards from './getCards';
import CardsServices from './CardServices';




export default function GetPricing() {
    return (
        <div>
            {
                getCards().map(price => <CardsServices
                key={price.id}
                id={price.id}
                pricingBox={price.pricingBox}
                h2={price.h2}/>)
            }
        </div>
    );
}
