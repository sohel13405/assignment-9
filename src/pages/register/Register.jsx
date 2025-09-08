import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/AuthProvider';
import Swal from 'sweetalert2';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {
    const { createUser, setUser, updateUser } = use(AuthContext);
    const [nameError, setNameError] = useState(' ')
    const [passwordError, setPasswordError] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const navigate = useNavigate()

    const handleRegister = (e) => {
        e.preventDefault();

        // console.log(e.target)
        const form = e.target;
        const name = form.name.value;

        if (name.length < 5) {
            setNameError('name should be more then five characters')
            return;
        }

        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;
        // console.log({ name, email, password, photo });

        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const isValidLength = password.length >= 6;

        if (!hasUppercase) {
            setPasswordError('Password must contain at least one uppercase letter.');
            return;
        }
        if (!hasLowercase) {
            setPasswordError('Password must contain at least one lowercase letter.');
            return;
        }
        if (!isValidLength) {
            setPasswordError('Password must be at least 6 characters long.');
            return;
        }

        setPasswordError('');



        createUser(email, password)
            .then((result) => {
                const user = result.user;
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Congratulations",
                    showConfirmButton: false,
                    timer: 3000
                });
                updateUser({ displayName: name, photoURL: photo })
                    .then(() => {
                        setUser({ ...user, displayName: name, photoURL: photo })
                        navigate('/')
                    })
                    .catch((error) => {
                        console.log(error)
                        setUser(user)
                    })

            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                alert(errorMessage, errorCode)
            })




    };


    return (
        <div>
            <div className="flex justify-center mt-12 mb-12 items-center">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl p-5">
                    <h1 className="text-xl text-center font-bold">Register In Your Account</h1>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label">Name</label>
                            <input name="name" type="text" className="input" placeholder="Name" required />

                            {nameError && <p className='text-red text-error'>{nameError}</p>}


                            <label className="label">Photo Url</label>
                            <input name="photo" type="text" className="input" placeholder="Photo Url" required />

                            <label className="label">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" required />

                            <label className="label">Password</label>
                            <div className="relative">
                                <input
                                    name="password"
                                    type={showPassword ? 'text' : 'password'} 
                                    className="input w-full pr-10"
                                    placeholder="Password"
                                    required
                                />
                                <span
                                    className="absolute right-3 top-3 cursor-pointer text-gray-500"
                                    onClick={() => setShowPassword(!showPassword)}   
                                >
                                    {showPassword ? <FaEyeSlash /> : <FaEye />}     
                                </span>
                            </div>


                            <button type="submit" className="btn hover:bg-[#0da29fb0] text-white bg-[#0da2a0] mt-4">
                                Register
                            </button>

                            <p className="text-lg text-center mt-2">
                                Already Have An Account?{' '}
                                <Link className="text-red-500" to="/auth/login">Login</Link>
                            </p>


                        </fieldset>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;