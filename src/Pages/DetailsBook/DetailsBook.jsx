import React, { useContext, useState } from 'react';
import useAxios from '../../Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link } from 'react-router-dom';

const DetailsBook = ({book}) => {
  const {user}= useContext(AuthContext)
  // original id final

  const [quantity,setQuantity]= useState(book.quantity)
  const {bookImg,_id,bookName,desc, author,category,rating}= book;


  const axios = useAxios()
 
  const [datee,setDate]=useState()
  


     const handleBorrowForm= e=>{
      e.preventDefault()
        
      const form= new FormData(e.currentTarget);
      const date= datee;
      const  name= user?.displayName;
      const email= user?.email;
      const uniqueId=_id;
    
      const unique= 'unique';
      // const bookImg= bookImg

      console.log(user.email);
    const borrowedInfo= {date,name,email,bookImg,uniqueId,unique,bookName,category}

      const modal = document.getElementById('my_modal_1');
      if (modal) {
        modal.close()
      }


  //  post borroed books date and name and email to borrowed-book collection

      axios.post(`/borrowed-books` ,borrowedInfo)

      .then(res=>{
        if (res.data.erro) {
          toast.error(res.data.erro)
        }
        else{
          toast.success('Book Borrowed has Successful')
          axios.put(`/books/${_id}`,book)
          .then(data=>{
            if (data.data.modifiedCount>0) {
              setQuantity(quantity-1)
            }
          })
        }
     

         
  
    
      })
      .catch(error=>{
        // chatgpt here is error not show instead show toast that book borrowd succesful
        toast.error('You already added this book')
       
      
      })



     }


     const handleDate=(e)=>{
         setDate(e.target.value)
        
     }


    return (
        <div>
            <section className="text-gray-700 body-font overflow-hidden bg-white">
  <div className="container px-5 py-24 mx-auto">
    <div className="lg:w-4/5 mx-auto flex flex-wrap">
      <img alt="ecommerce" className="lg:w-1/2  object-contain object-center w-[100%] h-[300px] px-4 rounded " src={bookImg}/>
      <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
        <h2 className="text-sm title-font text-gray-500 tracking-widest">Author: {author}</h2>
        <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{bookName}</h1>
        <div className="flex mb-4">
          <span className="flex items-center">
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 text-red-500" viewBox="0 0 24 24">
              <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
            </svg>
            <span className="text-gray-600 ml-3"> {rating} </span>
          </span>
          <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
            <a className="text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a className="ml-2 text-gray-500">
              <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
              </svg>
            </a>
          </span>
        </div>
        <p className="leading-relaxed">  {desc} </p>

        <div className="flex">
          <span className="title-font font-medium text-2xl text-red-600"> Price : {'available'} </span>

        
   


  
  <span> <strong>Quantity</strong> : {quantity}  </span>
       
          
{/* Open the modal using document.getElementById('ID').showModal() method */}
<button disabled={quantity===0} className="btn  bg-red-500 text-white" onClick={()=>document.getElementById('my_modal_1').showModal()}>Borrow</button>
<dialog id="my_modal_1" className="modal">
  <div className="modal-box">
    <h3 className="font-bold text-lg">Hello!</h3>
    <p className="py-4">You Have to Borrowed one Book. Please Select Date .</p>
    <div className="flex justify-center">
      <form  onSubmit={handleBorrowForm} method="">
        {/* if there is a button in form, it will close the modal */}
         <p className='font-medium'>Return Date</p>
        <input required onChange={handleDate}  name='date' type="date" className='input input-bordered' />
        <button type='submit' className="btn  block mt-4">Submit</button>
      </form>
    </div>
  </div>
</dialog>
<Link to={`/readbook/${_id}`}>
<button   className="flex w-28 px-9  ml-9 text-white bg-red-500 border-0 py-2 w- focus:outline-none hover:bg-red-600 rounded">Read</button>
</Link>

        </div>
      </div>
    </div>
  </div>
</section>
        </div>
    );
};

export default DetailsBook;