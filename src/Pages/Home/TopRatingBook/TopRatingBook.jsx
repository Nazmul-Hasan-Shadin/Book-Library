import { useQuery } from '@tanstack/react-query';

import React from 'react';
import useAxios from '../../../Hooks/useAxios';
import BookCard from '../BooksCard/BookCard';

const TopRatingBook = () => {
    const axios = useAxios()
    const {data:books}= useQuery({
        queryKey: ['topRatingBook'],
        queryFn:()=> axios.get('/books')
    })


   const topRatingBookFilter= books?.data.filter(book=> book.rating > 3 )

    return (
       <section className='my-8 space-y-4'>
         <h2 className='text-3xl font-bold text-center'> Our Most Top Rated Books </h2>
         <p className='text-center'>You Can Borrow Now Hurry Up</p>
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
            {
                topRatingBookFilter?.slice(0,4).map(book=> <BookCard key={book._id} book={book}  ></BookCard> )
            }
        </div>
       </section>
    );
};

export default TopRatingBook;