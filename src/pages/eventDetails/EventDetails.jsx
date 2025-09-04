import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import SingleDetails from '../singleDetails/SingleDetails';

const EventDetails = () => {

    const {id} = useParams()
    const data = useLoaderData()
    // console.log(id,data)

    const [eventDetails, setEventDetails] = useState([])

    useEffect(()=> {
        const filteredEvent = data.find((event)=> event.id == id)
        // console.log(filteredEvent)
        setEventDetails(filteredEvent)
        

    },[id , data]);

    

    return (
        <div>
<h1>{eventDetails.name}</h1>
        </div>
    );
};

export default EventDetails;