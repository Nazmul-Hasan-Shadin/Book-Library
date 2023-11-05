import React, { useState } from 'react';
import useAxios from '../../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import BookCard from './BookCard';
import { useParams } from 'react-router-dom';

const BookCards = () => {
    const axios = useAxios();
    const {id}= useParams();
     const lowerCaseid= id.toLocaleLowerCase();
     console.log(lowerCaseid,'lowr');
  

    const {data:books}= useQuery({
        queryKey:['booksdata'],
        queryFn: ()=>{
           const booksData= axios.get(`/books/${lowerCaseid}`)
          return booksData
        }
    })

 console.log(books?.data);
    return (
 <div >
            
         
           <div className='grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-4 my-10'>
 
           
   
              {      books?.data.map(book => (
                        <BookCard
                            book={book}
                            key={book._id}
                        ></BookCard>
                    ))
               
              }



           </div>


      

        </div>
    );
};

export default BookCards;