
import useAxios from '../../Hooks/useAxios';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import BorrowedBook from './BorrowedBook';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';

const BorrowedBooks = () => {
    const queryClient= useQueryClient()
    const {user}= useContext(AuthContext)
    const axios= useAxios()
     const {data}=useQuery({
        queryKey: ['borrowed-books'],
        queryFn: ()=> {
            return axios.get(`/borrowed-books/?email=${user?.email}`)
        }
     })


     const {mutate}= useMutation({
        mutationKey:['borrowed-books'],
        mutationFn:(id)=>{
            return axios.delete(`/borrowed-books/${id}`)
     
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['borrowed-books']})
            toast.success('Book Return Successful')
        }
     })
     console.log(data,'this isdata');
 
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2  gap-2'>
            {
                data?.data?.map(borrowBook=> <BorrowedBook 
                    deleteMutate={mutate}
                    borrowBook={borrowBook}
                    key={borrowBook._id}></BorrowedBook> )
            }
        </div>
    );
};

export default BorrowedBooks;