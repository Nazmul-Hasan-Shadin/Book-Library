
import useAxios from '../../../Hooks/useAxios';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

import {AiOutlineStar,AiTwotoneStar}from "react-icons/ai"

const BookCard = ({book}) => {
const {bookImg,_id,bookName,
    quantity,desc, author,category,rating}= book;

 
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
    <span className="flex justify-between "> 
    <Link className='' to={`/findbooksbyid/${_id}`}> <button className="btn ">Details</button></Link>
    </span>
    </div>
  </div>
</div>
    );
};

export default BookCard;