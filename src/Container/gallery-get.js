import React from 'react';
import kodflix from '../images/kodflix.png';
import burgerProject from '../images/burgerProject.png';



export default function galleryGet() {
    return [
        { id: "kodflix", name: "KodFlix", logo: kodflix, linkId: "https://kodflix-phi.now.sh/", details: "" },
        { id: "countify", name: "CountiFy", logo: burgerProject, linkId: "https://burger-beta.now.sh/", details: "" }
    ]
}