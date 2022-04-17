import React, { useEffect, useState } from 'react';
import Service from './Service/Service';
import './Services.css';

const Services = () => {
    const [data, setData] = useState([]);
    useEffect( () => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, []);
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {
                    data.map(service => <Service service = {service} key={service.id}/>)
                }
            </div>
        </div>
    );
};

export default Services;