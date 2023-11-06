import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../Hooks/useAxios';
import DetailsBook from './DetailsBook';
import { useParams } from 'react-router-dom';
  
const DetailsBooks = () => {
  const {id}= useParams()
//  its original id
    const axios= useAxios()
    
    const {data,isLoading}=useQuery({
        queryKey: ['specificProductDetails'],
        queryFn: ()=>{
            const res=   axios.get(`/findbooksbyid/${id}`)
            return res
        }
     })

     if (isLoading) {
      return <span  className=" flex  mx-auto justify-center  loading loading-dots loading-lg"></span>
     }
   
 
    return (
        <div>
      {
        data?.data.map(book=> <DetailsBook 
          book={book}
          key={book._id}></DetailsBook>  )
      }
        </div>
    );
};

export default DetailsBooks;