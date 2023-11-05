import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Book from './Book';

const AllBooks = () => {
    const [quantityFilter,setQuantityFilter]= useState(true)
 
        const axios= useAxios()
    const {data:allBooks}= useQuery({
        queryKey:['allbooks'],
        queryFn: ()=>{
            return axios.get('/books')
        }
    })
    console.log(allBooks?.data);
    const quantity= allBooks?.data.filter(book=> book.quantity > 0 )
    console.log(quantity,'qua');
    // useEffect(()=>{
    //     setGreaterQuantity(quantity)
    // },[])

    const handleFilter=()=>{
        setQuantityFilter(!quantityFilter)
    }
    return (
       <div>
        <button onClick={()=>handleFilter()} className='btn btn-primary fixed top-5 right-10 z-5 '> See AvailableBook </button >
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
               quantityFilter ?allBooks?.data.map(book=>  <Book book={book} key={book._id}></Book>)  :quantity?.map(book=> <Book key={book._id} book={book} ></Book>)
            }
        </div>
       </div>
    );
};

export default AllBooks;