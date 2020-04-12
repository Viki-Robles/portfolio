import React from 'react';
import mobileicon from '../images/mobileicon.png';
import nounDesign from '../images/nounDesign.svg'
import nounMobile from '../images/nounMobile.svg'

export default function getServicesItems() {
    return[
        {id: "mobileicon", BoxTitle: "Web Development", BoxIcon: nounDesign, BoxContent:""},
        {id: "nounDesign", BoxTitle: "UI", BoxIcon: mobileicon, BoxContent:""},
        {id: "nounMobile", BoxTitle: "Web Design", BoxIcon: nounMobile, BoxContent:""}

    ];
}