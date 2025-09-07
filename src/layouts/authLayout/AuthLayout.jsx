import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../../components/footer/Footer';

const AuthLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AuthLayout;