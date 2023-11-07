import React from 'react';
import SingleAuthor from './SingleAuthor';
import useAxios from '../../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Aos from 'aos';
import 'aos/dist/aos.css'; 
const Author = () => {
    const axios = useAxios()
    const {data}= useQuery({
        queryKey:['author'],
        queryFn:()=>  axios.get('/author')
    })
    
    console.log(data);
    return ( <div className='my-5 space-y-3'>
        <h2 className='text-2xl font-bold text-center'>Authors of the month</h2>

        <div className='overflow-x-hidden'>
        <div data-aos="fade-left"
     data-aos-anchor="#example-anchor"
     data-aos-offset="500"
     data-aos-duration="500">
              <p  className='mx-auto  p-4 lg:p-0 md:w-6/12'>
        Discover these talented authors whose captivating stories will transport you to different worlds,and leave you eagerly turning the pages.  From gripping thrillers to  heartwarming romances, these   authors have something  special to offer for every book lover.
      </p>
        </div>
        </div>


      
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            {
                data?.data?.map(data=> <SingleAuthor key={data._id} data={data}></SingleAuthor> )
            }
        </div>
        </div>
    );
};

export default Author;