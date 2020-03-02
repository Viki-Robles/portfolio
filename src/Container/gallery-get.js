import react from 'react';
import kodflix from '../images/kodflix.png';
import countify from '../images/countify.png';



export default function galleryGet() {
    return [
        { id: "kodflix", name: "Kodflix", logo: kodflix, linkId: "https://kodflix-vicki.herokuapp.com/" },
        { id: "countify", name: "Countify", logo: countify, linkId: "#" }
    ]
}