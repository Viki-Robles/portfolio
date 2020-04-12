import React from 'react';
import './ServicesItems.css';
import getServicesItems from './getServicesItems';

export default function ServicesItems(props) {
    return (
        <>
            <div className="ServiceBoxes">
                <div className="ServiceBox">
                    <div className="ServiceBoxTitle">{props.BoxTitle}
                        <div className="BoxIcon">{props.BoxIcon}</div>
                        <div className="ServiceBoxContent">{props.BoxContent}</div>
                    </div>
                </div>
            </div>
        </>
    );
}