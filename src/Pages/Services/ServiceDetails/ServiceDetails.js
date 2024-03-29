import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useService from '../../components/useService';

const ServiceDetails = () => {
    const {serviceId} = useParams();
    const [data] = useService();
const [details, setDetails] = useState({});
const navigate = useNavigate();

useEffect( () => {
    const services = data.find(service => service.id == serviceId );
    setDetails(services);
}, [serviceId, data]);

    return (
        <div className='w-full flex mx-auto'>

            <div className="mx-auto">
            <div className='border m-3 p-3 rounded w-64'>
            <p className="ms-0 bg-red-400 text-white rounded-full border-r-52 w-10 my-2">{details?.id}</p>
            <img className='object-cover w-58 mx-auto rounded' src={details?.image} alt="" />
            <h1 className='text-2xl py-2 text-indigo-500'>{details?.srvice}</h1>
            <p className="text-sm">{details?.description}</p>
            <div className="flex items-center justify-between mt-5 bg-gray-200 px-2 rounded">
                <span className="">Starting From</span>
                <p className="font-bold">{details?.price}</p>
            </div>
            <button onClick={()=>navigate('/checkout')} className='btn bg-indigo-500 text-white py-2 rounded px-10 mt-5' type="submit">Proceed to Checkout</button>
            </div>
            </div>
        </div>
    );
};

export default ServiceDetails;
