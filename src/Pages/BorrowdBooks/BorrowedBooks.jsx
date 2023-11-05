import React from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import BorrowedBook from './BorrowedBook';

const BorrowedBooks = () => {
    const axios= useAxios()
     const {data}=useQuery({
        queryKey: ['borrowed-books'],
        queryFn: ()=> {
            return axios.get('/borrowed-books')
        }
     })
     console.log(data);
    return (
        <div>
            {
                data?.data.map(borrowBook=> <BorrowedBook 
                    borrowBook={borrowBook}
                    key={borrowBook._id}></BorrowedBook> )
            }
        </div>
    );
};

export default BorrowedBooks;