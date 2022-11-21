import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Payment = () => {
    const booking = useLoaderData()
   const {Price, treatment, appointmentDate, slot} = booking
    return (
        <div>
            <h1 className='text-3xl'> Payment for {treatment} </h1>
            <p className='mt-3 text-xl'>Please pay <strong>${Price} </strong> for your appointment on {appointmentDate} at {slot}</p>
        </div>
    );
};

export default Payment;