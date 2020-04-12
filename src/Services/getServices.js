import React from 'react';
import ServicesItems from './ServicesItems';

export default function getServices() {
    return(
        <div>
            {
                getServicesItems.map(service => {
                    <ServicesItems 
                    key={service.id}
                    id={service.id}
                    BoxTitle={service.BoxTitle}
                    BoxIcon={service.BoxIcon}
                    BoxContent={service.BoxContent}/>
                })
            }
        </div>
    );
}