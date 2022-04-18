import React from 'react';
import Slider from '../components/Slider';
import ThreeService from '../Services/ThreeService/ThreeService';
import CityTravel from './CityTravel';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Slider/>
            <ThreeService/>
            <CityTravel/>
        </div>
    );
};

export default Home;