import React from 'react';
import Slider from './slider/Slider';
import Events from '../../pages/events/Events';
import { useLoaderData } from 'react-router';
import Client from '../../components/client/Client';
import AmazingFeatures from '../../components/amazingFetures/AmazingFeatures';

const Home = () => {

    const data = useLoaderData()
    // console.log(data)

    return (
        <div>
            <Slider></Slider>
            <Events data={data}></Events>
            <AmazingFeatures></AmazingFeatures>
            <Client></Client>
            
        </div>
    );
};

export default Home;