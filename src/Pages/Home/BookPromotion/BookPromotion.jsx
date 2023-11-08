import React from 'react';

const BookPromotion = () => {
    return (
        <div data-aos='fade-up'data-aos-duration='1000' className='mt-7'>
            <h2 className='text-3xl text-center text-red-500 font-semibold mb-6'>Book Promotions</h2>
            <p className='text-center text-lg mb-6'>
                Explore our exciting book promotions and events. Join us for a series of literary experiences <br /> that you won't want to miss.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-11/12 lg:pl-32 mx-auto'>
                <div className='space-y-8'>
                    <div className='bg-gray-100 p-4  rounded-md'>
                        <p className='text-lg font-semibold text-gray-600'>Date</p>
                        <p className='text-red-500 font-semibold'>21.07.2025</p>
                        <p className='text-gray-500'>Ba, CALIFORNIA</p>
                    </div>
                    <div className='bg-gray-100 p-4 rounded-md'>
                        <p className='text-lg font-semibold text-gray-600'>Date</p>
                        <p className='text-red-500 font-semibold'>21.09.2024</p>
                        <p className='text-gray-500'>LA, Japan</p>
                    </div>
                    <div className='bg-gray-100 p-4 rounded-md'>
                        <p className='text-lg font-semibold text-gray-600'>Date</p>
                        <p className='text-red-500 font-semibold'>21.07.2022</p>
                        <p className='text-gray-500'>LA, Canada</p>
                    </div>
                    <div className='bg-gray-100 p-4 rounded-md'>
                        <p className='text-lg font-semibold text-gray-600'>Date</p>
                        <p className='text-red-500 font-semibold'>21.07.2023</p>
                        <p className='text-gray-500'>LA, CALIFORNIA</p>
                    </div>
                </div>
                <div className='space-y-8  hidden md:block md:ml-28  '>
                    <div className='text-2xl flex items-center p-4 h-[100px] w-[380px]font-semibold text-gray-500   '>Festival Books</div>
                    <div className='text-2xl flex items-center p-4 h-[100px] w-[380px]font-semibold text-gray-800  '>Festival Books</div>
                    <div className='text-2xl  p-4 h-[100px] w-[380px]font-semibold text-gray-500 flex items-center   '>Book Fair</div>
                    <div className='text-2xl  p-4 h-[100px] w-[380px]font-semibold text-gray-500 flex items-center  '>Promotion Books</div>
                </div>
                <div className='space-y-8 hidden md:block'>

                <div className='text-2xl flex items-center p-4 h-[100px] w-[380px]font-semibold text-gray-500'> 
                <button className='block btn btn-primary'>See Tickets</button>
                  </div>
                    <div className='text-2xl flex items-center p-4 h-[100px] w-[380px]font-semibold text-gray-500'>

                    <button className='block btn btn-disabled'>Sold Out</button>

                    </div>
                    <div className='text-2xl  p-4 h-[100px] w-[380px]font-semibold text-gray-800 flex items-center '>
                    <button className='block btn btn-disabled'>See Tickets</button>

                    </div>
                    <div className='text-2xl  p-4 h-[100px] w-[380px]font-semibold text-gray-800 flex items-center '> 
                    
                     
                    <button className='block btn btn-disabled'>Sold Out</button>
                    </div>

                   
                 
                  
                </div>
            </div>
            </div>
       
    );
};

export default BookPromotion;
