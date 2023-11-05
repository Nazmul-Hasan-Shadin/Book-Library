
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import BorrowedBook from './BorrowedBook';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const BorrowedBooks = () => {
    const {user}= useContext(AuthContext)
    const axios= useAxios()
     const {data}=useQuery({
        queryKey: ['borrowed-books'],
        queryFn: ()=> {
            return axios.get(`/borrowed-books/?email=${user?.email}`)
        }
     })
 
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-2'>
            {
                data?.data.map(borrowBook=> <BorrowedBook 
                    borrowBook={borrowBook}
                    key={borrowBook._id}></BorrowedBook> )
            }
        </div>
    );
};

export default BorrowedBooks;