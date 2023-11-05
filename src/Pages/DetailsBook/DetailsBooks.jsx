import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxios from '../../Hooks/useAxios';
import DetailsBook from './DetailsBook';
import { useParams } from 'react-router-dom';
  
const DetailsBooks = () => {
  const {id}= useParams()
  console.log(id,'usepara');
    const axios= useAxios()
    
    const {data}=useQuery({
        queryKey: ['specificProductDetails'],
        queryFn: ()=>{
            const res=   axios.get(`/findbooksbyid/${id}`)
            return res
        }
     })
     console.log(data);
 
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