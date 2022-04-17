import React from 'react';
import Slider from '../components/Slider';
import ThreeService from '../Services/ThreeService/ThreeService';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Slider/>
            <ThreeService/>
        </div>
    );
};

export default Home;