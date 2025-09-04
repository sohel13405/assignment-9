import React from 'react';
import { NavLink } from 'react-router';

const Event = ({singleEvent}) => {
    const {thumbnail,category,name,date,location,entryFee,id} =singleEvent;


    return (
        <div className=''>
            <div>
                <img className=' rounded-t-2xl' src={thumbnail} alt="" />
            </div>

            <div className='bg-white p-5 rounded-b-2xl'>
            <div className=' pl-3 pt-2'>
                <h1 className='text-xl font-semibold w-fit px-2 rounded-lg text-[#0da2a0]'>{name}</h1>
                <div className='mt-3'>
                    <h2>Category : {category}</h2>
                    <h3>Location : {location}</h3>
                    <h4>Date : {date}</h4>
                    <h5>Entry Fee : {entryFee}</h5>
                    <NavLink to={`/eventDetails/${id}`}>
                    <button className='btn btn-outline btn-accent mt-2 w-full'>View Details</button>
                    </NavLink>
                </div>
            </div>
            </div>

        </div>
    );
};

export default Event;