import React, { useEffect, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import Book from './Book';

const AllBooks = () => {
  
    const [search,setSearch]= useState('')

    const [quantityFilter,setQuantityFilter]= useState(true)
 
        const axios= useAxios()
    const {data:allBooks,refetch}= useQuery({
        queryKey:['allbooks'],
        queryFn: ()=>{
            return axios.get(`/books?search=${search}`)
        }
    })
  
    const quantity= allBooks?.data.filter(book=> book.quantity > 0 )
   
    // useEffect(()=>{
    //     setGreaterQuantity(quantity)
    // },[])

    const handleFilter=()=>{
        setQuantityFilter(!quantityFilter)
    }
   
    const handleSearch=(e)=>{
         e.preventDefault()
        const search= e.target.search.value;
        console.log(search);
        setSearch(search)
      
    }

    useEffect(()=>{
        refetch()
    },[search,refetch])

    return (
       <div>

        <button onClick={()=>handleFilter()} className='btn btn-primary  z-10 fixed  top-20 right-10 mt-12 '> See AvailableBook </button >


        <form onSubmit={handleSearch} className='mt-12'>
        
   
   <input name='search' type="text" placeholder="Search your book" className="input input-bordered  w-6/12" />
   <input className='btn border-[0] rounded  bg-[#dacad7]' type="submit" value={'search'} />
     
     
     
   
        </form>
    
          

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-4 lg:my-24'>
            {
               quantityFilter ?allBooks?.data.map(book=>  <Book book={book} key={book._id}></Book>)  :quantity?.map(book=> <Book key={book._id} book={book} ></Book>)
            }
        </div>
       </div>
    );
};

export default AllBooks;