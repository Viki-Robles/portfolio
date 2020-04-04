import react from 'react';
import kodflix from '../images/kodflix.png';
import countify from '../images/countify.png';



export default function galleryGet() {
    return [
        { id: "kodflix", name: "KodFlix", logo: kodflix, linkId: "https://kodflix-phi.now.sh/", details: "" },
        { id: "countify", name: "CountiFy", logo: countify, linkId: "https://countify.now.sh/", details: "" }
    ]
}