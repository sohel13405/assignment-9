import React from 'react';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';

const SingleDetails = ({eventDetails}) => {
    const navigate = useNavigate();

const handleSubmit = (e) =>{
 e.preventDefault()
    
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Your seat is reserved",
        showConfirmButton: false,
        timer: 4000
      });

      navigate('/')
      
}

    const {thumbnail,category,name,date,location,entryFee}= eventDetails;


    return (
        <div className='w-fit md:w-fit lg:w-7xl mx-auto pt-20 pb-20 lg:flex gap-12 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center'>

            <div className="left w-fit md:w-fit lg:w-[49%]  lg:flex text-center lg:text-start lg:items-center gap-4 ">

            <div><img className='rounded-4xl' src={thumbnail} alt="" /></div>

            <div className='mt-5'>
            <h1 className='text-3xl font-semibold text-[#0da2a0]'>{name}</h1>
            <div className='text-xl text-[#696969] mt-3 space-y-2.5'>
            <h2>Category : {category}</h2>
            <h3>Date : {date}</h3>
            <h4>Location : {location}</h4>
            <h5>Evtry fee : {entryFee}</h5>
            </div>
            </div>
            </div>

           

            
        {/* ------------------------- */}
            <div className="right  lg:w-[49%]  grid items-center p-4 md:p-0 lg:p-20 ">

            <form onSubmit={handleSubmit} className="card-body  rounded-xl bg-[#0da2a0]">
          <fieldset className="fieldset ">

            <label className="label">Email</label>
            <input name="email" type="email" className="input w-full" placeholder="Email" required />

            <label className="label">Password</label>
            <input name="password" type="password" className="input w-full" placeholder="Password" required />

            <button type='submit' className="btn hover:bg-[#0da29fb0] text-white bg-[#0da2a0] mt-4 w-fit">
              Reserve Your seat
            </button>
            

            
          </fieldset>
        </form>

            </div>

        </div>
    );
};

export default SingleDetails;