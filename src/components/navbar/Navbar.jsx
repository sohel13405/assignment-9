import React, { use } from 'react';
import { Link, NavLink, useNavigate } from 'react-router';
import logo from '../../assets/logo.png'
import { AuthContext } from '../../provider/AuthProvider';
import userIcon from '../../assets/userIcon.png'
import Swal from 'sweetalert2';

const Navbar = () => {

    const {user, logOut} = use(AuthContext);
    const navigate = useNavigate();

    const handleLogout = ()=>{
        console.log('user trying to logOut')
        logOut()
        .then(()=>{
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "You are logged out successfully",
                showConfirmButton: false,
                timer: 5000
              });
              navigate('/')

        })
        .catch((error)=>{
            console.log(error);
        })
    }

const link = <>

<li><NavLink to='/' className={({isActive})=> isActive ? " text-[#0da2a0] font-bold" : "text-gray-700"} >Home</NavLink></li>

<li><NavLink to='/about' className={({isActive})=> isActive ? " text-[#0da2a0] font-bold" : "text-gray-700"} >About</NavLink></li>

<li><NavLink to='/myprofile' className={({isActive})=> isActive ? " text-[#0da2a0] font-bold" : "text-gray-700"} >My Profile</NavLink></li>
 


</>

    return (
      <div className=''>
          <div className="navbar bg-base-100 shadow-sm px-10">
        <div className="navbar-start">
            
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              {link}
              
            </ul>
          </div>
          <a className="btn btn-ghost text-xl"><img className='w-36 md:w-44 lg:w-56' src={logo} alt="" /></a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {link}
            
          </ul>
        </div>
        
        <div className="navbar-end">
        <h1 className='hidden lg:block'>{user && user.email}</h1>
        <img className='w-10 rounded-full ml-3 mr-4 hidden lg:block' src={`${user ? user.photoURL :userIcon }`} alt="" />
            {
                user ? <Link to='/auth/login' onClick={handleLogout} className="btn btn-accent text-white">Log Out</Link> : <Link to='/auth/login' className="btn btn-accent text-white">Log In</Link>
            }
          
        </div>
      </div>
      </div>
    );
};

export default Navbar;