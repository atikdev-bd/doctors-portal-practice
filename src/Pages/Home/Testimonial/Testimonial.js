import React from 'react';
import quote from '../../../assets/icons/quote.svg'
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from './Review';

const Testimonial = () => {

    const reviews = [
        {   _id : 1,
            name : 'Winson Herry',
            location : "California",
            review : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img : people1
            
        },
        {   _id : 2,
            name : 'Malina Dsilva',
            location : "New Work",
            review : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img : people2
        },
        {   _id : 3,
            name : 'Ammbar Hart',
            location : "California",
            review : "It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content",
            img : people3
        },
    ]
    return (
        <div className='mt-24'>
            <div className='flex justify-between'> 
                
            <div>
                <h4 className='text-xl text-green-600'>Testimonial</h4>
                <h2 className='text-4xl mt-4'>What Our Patients Says</h2>
            </div>
            
            <div className=''>
           <img className='w-48' src={quote} alt="" />
            </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-12'>
                {
                    reviews.map(rev => <Review key={rev._id} revInfo = {rev}></Review>)
                }
            </div>
        </div>
    );
};

export default Testimonial;