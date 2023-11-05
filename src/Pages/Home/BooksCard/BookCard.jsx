import React from 'react';
import useAxios from '../../../Hooks/useAxios';
import { Link } from 'react-router-dom';

const BookCard = ({book}) => {
const {bookImage,_id,bookname,
    quantity, authorName,category}= book;
   
 
    return (
<div className="card  dark:bg-base-100     shadow ">
  <figure>
    <img className="w-60 h-60" src={bookImage} alt="" />
    </figure>
  <div  className="card-body">
    <span className="flex dark:text-white ">
        <p className="flex-1 ">Author: {authorName} </p>
        <div className="rating dark:text-white rating-xs flex flex-row-reverse justify-between items-center ">
            <span className='ml-2' >  4 review</span>
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" checked />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
  <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" />
</div>
        {/* <p className="flex-1">star: {rating} </p> */}
    </span>
    <p className="text-blue-600"> {bookname} </p>
    <div className="card-actions justify-end dark:text-white">
      <p className="text-[#f53c3c] font-extrabold "> 44 </p>
      <p  className="font-bold"> type: {category} </p>
    </div>
    <span className="flex justify-between"> 
    <Link to={`/details/${_id}`}> <button className="btn">Details</button></Link>
    </span>
  </div>
</div>
    );
};

export default BookCard;