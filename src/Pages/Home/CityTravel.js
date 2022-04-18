import React from 'react';
import image from '../../images/Travel-PNG-Images.png';
const CityTravel = () => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-10 my-24 mx-auto items-center w-full'>
            <div className="p-5">
                <h2 className="text-4xl text-orange-500 py-5">City <span className="text-red-500">Travel</span></h2>
                <p className="text-gray-500">if You Want to Travel, you can contact with me.Plus, beyond serving as a trustworthy source of inspiration, a travel site also needs to give would-be travelers all the information they need to arrange their travel plans.So whether you’re considering launching a new travel site, or you’re ready to improve an existing one, you want to make sure you leave no stone unturned.</p>
            </div>
            <div className="p-5">
            <img src={image} className="obejct-cover w-half" alt="" />
            </div>
        </div>
    );
};

export default CityTravel;