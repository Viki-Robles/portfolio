import React from 'react';
import mobileicon from '../images/mobileicon.png';
import nounDesign from '../images/nounDesign.svg'
import nounMobile from '../images/nounMobile.svg'

export default function getServicesItems() {
    return[
        {id: "Box1", BoxTitle: "Web Development", BoxIcon: nounDesign, BoxContent:""},
        {id: "Box2", BoxTitle: "UI", BoxIcon: mobileicon, BoxContent:""},
        {id: "Box3", BoxTitle: "Web Design", BoxIcon: nounMobile, BoxContent:""}

    ]
}