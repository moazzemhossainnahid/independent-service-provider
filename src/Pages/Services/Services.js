import React from 'react';
import useService from '../components/useService';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [data] = useService();
    return (
        <div>
            <h3 className="text-3xl font-bold underline text-center py-16">Service of Tours</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(service => <Service service = {service} key={service.id}/>)
                }
            </div>
        </div>
    );
};

export default Services;