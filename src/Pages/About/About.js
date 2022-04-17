import React from 'react';
import './About.css';

import nahid from '../../images/nahid.jpg';

const About = () => {
    return (
        <div>
            <h3 className='text-5xl py-5 text-indigo-500'>About Me</h3> 
            <div className="box w-full mx-auto">
                <img className='mx-auto w-52 rounded-full shadow-lg shadow-indigo-500 my-3' src={nahid} alt="" />
                <div className="">
                    <h3 className="text-3xl">MD. NAHID</h3>
                </div>
            </div>
        </div>
    );
};

export default About;