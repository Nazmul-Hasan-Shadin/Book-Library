import { useQuery } from '@tanstack/react-query';

import React from 'react';
import useAxios from '../../../Hooks/useAxios';
import CategoryCard from './CategoryCard';


const BookCategory = () => {

    const axios= useAxios()
    const {data:categories}= useQuery({
        queryKey: ['category'],
        queryFn: ()=>{
         return axios.get('/book-category')
        }
    })

    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        {
            categories?.data.map(category=> <CategoryCard 
                category={category}
                key={category._id}  ></CategoryCard>)
        }
        </div>
    );
};

export default BookCategory;