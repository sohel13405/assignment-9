import React from 'react';
import Event from '../event/Event';

const Events = ({data}) => {
    // console.log(data)

 


    return (
        <div className='mb-15'>
            <div className='w-fit md:w-fit lg:w-7x mx-auto mt-10 mb-10'>
            <h1 className='text-3xl font-bold text-[#0da2a0]'>OUR UPCOMING EVENTS</h1>
            </div>

            <div className='w-fit md:w-full lg:w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 p-3 '>
                {
                    data.map((singleEvent)=>(
                        <Event key={singleEvent.id} singleEvent={singleEvent}></Event>
                    ))
                }
           
            </div>


            





        </div>

        


    );
};

export default Events;