import React from 'react';
import { AiOutlineStar, AiTwotoneStar } from 'react-icons/ai';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Book = ({book}) => {
const {_id, name, bookImg,date,email,borrowedDate,bookName,uniqueId,quantity,category,rating,author}=book;
    return (
<div className="card   dark:bg-base-100     shadow ">
  <figure>
    <img className="w-[100%] h-[300px] px-4" src={bookImg} alt="" />
    </figure>
  <div  className="card-body px-4">
    <div className="flex w-[100%] gap-2 justify-between ">
        <p className=" ">Author: {author} </p>

    
    <Rating
     initialRating={rating}
  emptySymbol={<AiOutlineStar className='icon'></AiOutlineStar>}
  fullSymbol={<AiTwotoneStar className='icon'></AiTwotoneStar>}
/>

        <p className=" ">{rating} star </p>
    </div>
    <div>
    <p className="text-blue-600    "> {bookName} </p>
    <div className="card-actions gap-10 mb-4 justify-between ">
      <p className="text-[#f53c3c] font-extrabold "> Quantity: {quantity} </p>
      <p  className="font-bold "> category: {category} </p>
    </div>
    <p className=" w-[100%] "> 
    <Link className='' to={`/updatebook/${_id}`}> <button className="btn btn-outline w-full ">Update</button></Link>
    </p>
    </div>
  </div>
</div>
    );
};

export default Book;