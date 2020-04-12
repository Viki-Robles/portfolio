import React from 'react';
import ServicesItems from '../Services/ServicesItems';
import getServicesItems from '../Services/getServicesItems';

export default function getServices() {
    return(
        <div>
            {
             
             getServicesItems.map(serviceKey => (
                    <ServicesItems 
                    key={serviceKey.id}
                    id={serviceKey.id}
                    BoxTitle={serviceKey.BoxTitle}
                    BoxIcon={serviceKey.BoxIcon}
                    BoxContent={serviceKey.BoxContent}/>

                ))
               
            }
        </div>
    );
}