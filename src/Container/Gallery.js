import React from 'react';
import galleryGet from './gallery-get';
import Container from './Container';

export default function Gallery() {
    return (
    <div className="container"> {
        galleryGet().map(card => <Container key={card.id}
            id={card.id}
            name={card.name}
            logo={card.logo}/>
    )
    }
    
        
    </div>

    );
}