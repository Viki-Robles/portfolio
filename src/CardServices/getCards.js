import CardServices from './CardServices';
import nounDesign from '../images/nounDesign.svg';
import nounMobile from '../images/mobileicon.png';

export default function getCards() {
    return [
        { id: "pricing", icon: nounDesign, pricingBox: "Web Design", titlePricing: "Web Design and Development", pricingFeauture: "Clean, modern designs-optimised for performance, and converting users to customers"},
        { id: "pricing", icon: nounMobile, pricingBox: "Mobile Friendly", titlePricing: "UI Design", pricingFeauture: "A responsive design makes your website accessible to all users, regardless of their device" }
    ]
}