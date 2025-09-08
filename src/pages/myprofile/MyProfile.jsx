import React, { use } from 'react';
import { AuthContext } from '../../provider/AuthProvider';
import { auth } from '../../firebase/firebase.config';
import { updateProfile } from 'firebase/auth';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const MyProfile = () => {

    const navigate = useNavigate()
    const handleChange = async (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        console.log({ name, photo })

        try {
            await updateProfile(auth.currentUser, {
                displayName: name,
                photoURL: photo,
            });
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Update your profile successfully",
                showConfirmButton: false,
                timer: 3000
            });

        } catch (error) {
            console.error("Error updating profile:", error);
        }
        navigate('/myprofile')


    }


    const { user } = use(AuthContext);

    return (
        <div className='mb-9'>
            <div className='w-fit md:w-fit lg:w-5xl mx-auto flex flex-col justify-center items-center mt-9 lg:mt-12 mb-9 lg:mb-14 p-3'>
                <h1 className='text-5xl font-bold text-[#0da2a0]'>My Dashboard</h1>
                <p className='text-xl text-center mt-9 '>"Welcome to your profile! Here you can manage your personal information, view your booked events, and keep track of your upcoming activities. This space is designed just for you — to update your details, explore your event history, and customize your experience. Whether you're attending workshops, concerts, or special programs, your profile keeps everything organized in one place."</p>
            </div>

            <div className='lg:flex lg:items-center justify-around space-y-8 p-3 lg:p-15   border-t border-dashed border-[#0da2a0]'>

                <div className='bg-[#ffffff] space-y-4 p-12 rounded-3xl shadow-2xl text-[#0da2a0]  '>
                    <h2 className='text-xl'> Name : {user.displayName}</h2>
                    <h1 className='text-xl'> Email : {user.email}</h1>
                    <span className='flex items-center text-xl'>Photo :<img className='w-15' src={user.photoURL} alt="" /></span>
                </div>

                <div className=''>
                    <form onSubmit={handleChange} className="card-body bg-[#0da2a0] rounded-3xl w-full">
                        <h1 className='text-white text-xl'>Change Your Name and PhotoURL</h1>
                        <fieldset className="fieldset">

                            <label className="label">Name</label>
                            <input name="name" type="text" className="input" placeholder="Name" required />

                            <label className="label">Photo Url</label>
                            <input name="photo" type="text" className="input" placeholder="Photo Url" required />

                            <button type='submit' className="btn hover:bg-[#0da29fb0] text-white bg-[#0da2a0] mt-4">
                                Save
                            </button>

                        </fieldset>
                    </form>
                </div>



            </div>


        </div>
    );
};

export default MyProfile;