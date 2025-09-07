import React, { use, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';

const Login = () => {
    const {logIn , setUser} = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error , setError] = useState('');


const handleLogin = (e) =>{
 e.preventDefault();
   const form = e.target;
   const email = form.email.value;
   const password = form.password.value;
   console.log({email, password})

   logIn(email ,password)
   .then((result)=>{
    const user = result.user;
    // console.log(user)
    // setUser(user)
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "You are successfully logged in",
        showConfirmButton: false,
        timer: 5000
      });
    navigate(`${location.state ? location.state : '/'}`)
})
.catch((error)=>{
    const errorCode = error.code;
    // const errorMessage = error.message;
    // alert(errorMessage, errorCode)
    setError(errorCode)
})



}

    return (
        <div>
          <div className="flex justify-center mt-15 mb-15 items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
        <h1 className="text-xl text-center font-bold">Log In Your Account</h1>
        <form onSubmit={handleLogin} className="card-body">
          <fieldset className="fieldset">

            <label className="label">Email</label>
            <input name="email" type="email" className="input" placeholder="Email" required />

            <label className="label">Password</label>
            <input name="password" type="password" className="input" placeholder="Password" required />

            <div><a className="link link-hover">Forgot password?</a></div>
            {
                error && <p className='text-red-400'>{error}</p>
            }

            

            <button type='submit' className="btn hover:bg-[#0da29fb0] text-white bg-[#0da2a0] mt-4">
              Login
            </button>

            <p className="pt-3 text-lg">
              Don't Have An Account?{' '}
              <Link className="text-red-500" to="/auth/register">
                Register
              </Link>
            </p>
          </fieldset>
        </form>
      </div>
    </div>      
        </div>
    );
};

export default Login;