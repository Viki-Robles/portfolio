import React from 'react';
import './ServicesItems.css';
import getServicesItems from '../Services/getServicesItems';
import getServices from '../Services/getServices';

export default function ServicesItems(props) {
    return (
        <>
            <div className="ServiceBoxes">
                <div className="ServiceBox">
                    <div className="BoxTitle">{props.BoxTitle}
                        <div className="BoxIcon">{props.BoxIcon}</div>
                        <div className="BoxContent">{props.BoxContent}</div>
                    </div>
                </div>
            </div>
        </>
    );
}