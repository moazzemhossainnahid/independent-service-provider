import React from 'react';
import './About.css';
import nahid from '../../images/nahid.jpg';
import Facebook from '@iconscout/react-unicons/icons/uil-facebook';
import Linkedin from '@iconscout/react-unicons/icons/uil-linkedin';
import Instagram from '@iconscout/react-unicons/icons/uil-instagram';
import Twitter from '@iconscout/react-unicons/icons/uil-twitter';

const About = () => {
    return (
        <div>
            <h3 className='text-5xl py-5 text-indigo-500'>About Me</h3> 
            <div className="box w-full mx-auto">
                <img className='mx-auto w-52 rounded-full shadow-lg shadow-indigo-500 my-3' src={nahid} alt="" />
                <div className="w-2/4 mx-auto">
                    <h3 className="text-4xl text-gray-700 my-10">MD. NAHID</h3>
                    <p className="">Hey There, i am Nahid. i have a wish to be an web developper. thst's why a enrole this course and i Excluded my job for practising all the time. i wark hard day to night for be professional web developper. and may i can do that to be a Professional web Developeer. i feel good when i made an website thats looking good. i enjoyed that and i want to be developper and develope more project in future.</p>
                </div>
                <div className="social flex items-center justify-center my-10 gap-5">
                    <a target='_blank' href="https://facebook.com/MoazzemNahid" className=""><Facebook className="hover:text-gray-500" size={'2rem'}/></a>
                    <a target='_blank' href="https://instagram.com/moazzemhossainnahid" className=""><Instagram className="hover:text-gray-500" size={'2rem'}/></a>
                    <a target='_blank' href="https://twitter.com/MoazzemNahid" className=""><Twitter className="hover:text-gray-500" size={'2rem'}/></a>
                    <a target='_blank' href="https://linkedin.com/in/moazzemhossainnahid" className=""><Linkedin className="hover:text-gray-500" size={'2rem'}/></a>
                </div>
            </div>
        </div>
    );
};

export default About;