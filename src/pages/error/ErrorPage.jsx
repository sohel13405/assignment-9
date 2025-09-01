import React from 'react';
import error from '../../assets/error.png'
import Navbar from '../../components/navbar/Navbar';
import { Link } from 'react-router';

const ErrorPage = () => {

    return (
        <div>
            <Navbar></Navbar>
            <div className='w-fit md:w-full lg:max-w-7xl mx-auto '>
            <img src={error} alt="" />
            <Link to='/'><button className='btn btn-accent mb-6'>Go Back Home</button></Link>
        </div>
        </div>
    );
};

export default ErrorPage;