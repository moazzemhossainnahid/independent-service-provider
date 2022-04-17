import React from "react";
import useService from "../../components/useService";
import ServiceThree from "../../Home/ServiceThree";

import Arrow from '@iconscout/react-unicons/icons/uil-arrow-right';
import { useNavigate } from "react-router-dom";

const ThreeService = () => {
  const [data] = useService();
  const newData = data.slice(0, 3);
  const navigate = useNavigate();

  return (
    <div className="">
      <h3 className="text-3xl font-bold underline text-center py-16">Service of Tours</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {newData.map((service) => (
          <ServiceThree service={service} key={service.id} />
        ))}

      </div>
      <button onClick={() => navigate('/services')} className='btn bg-indigo-500 text-white py-2 rounded px-10 mt-5 flex items-center mx-auto' type="submit">See More <Arrow/></button>
    </div>
  );
};

export default ThreeService;
