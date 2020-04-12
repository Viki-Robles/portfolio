import React from 'react';
import './ServicesItems.css';


export default function ServicesItems(props) {
    return (
        <>
            
                <div className="ServiceBox">
                    <div className="BoxTitle">{props.BoxTitle}
                        <div className="BoxIcon">{props.BoxIcon}</div>
                        <div className="BoxContent">{props.BoxContent}</div>
                    
                </div>
            </div>
        </>
    );
}