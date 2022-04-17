import React from 'react';

const ServiceThree = ({service}) => {
    const {id, srvice, description, price, image} = service;
    return (
        <div className="mx-auto">
            <div className='border m-3 p-3 rounded w-64'>
            <p className="ms-0 bg-red-400 text-white rounded-full border-r-52 w-10 my-2">{id}</p>
            <img className='object-cover w-58 mx-auto rounded' src={image} alt="" />
            <h1 className='text-2xl py-2 text-indigo-500'>{srvice}</h1>
            <p className="text-sm">{description}</p>
            <div className="flex items-center justify-between mt-5 bg-gray-200 px-2 rounded">
                <span className="">Starting From</span>
                <p className="font-bold">{price}</p>
            </div>
            <button className='btn bg-indigo-500 text-white py-2 rounded px-10 mt-5' type="submit">Buy This Package</button>
        </div>
        </div>
    );
};

export default ServiceThree;