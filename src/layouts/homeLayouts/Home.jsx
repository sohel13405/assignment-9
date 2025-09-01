import React from 'react';
import Slider from './slider/Slider';
import Events from '../../pages/events/Events';
import { useLoaderData } from 'react-router';

const Home = () => {

    const data = useLoaderData()
    // console.log(data)

    return (
        <div>
            <Slider></Slider>
            <Events data={data}></Events>
        </div>
    );
};

export default Home;