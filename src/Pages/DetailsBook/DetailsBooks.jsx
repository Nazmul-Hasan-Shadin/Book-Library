import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../Hooks/useAxios';
import DetailsBook from './DetailsBook';
  
const DetailsBooks = () => {
    const axios= useAxios()
    const {data:books}=useQuery({
        queryKey: ['specificProductDetails'],
        queryFn: ()=>{
            return   axios.get(`/books/:${_id}`)
        }
     })
    return (
        <div>
      {
        books?.data.map(book=> <DetailsBook key={book._id}></DetailsBook>  )
      }
        </div>
    );
};

export default DetailsBooks;