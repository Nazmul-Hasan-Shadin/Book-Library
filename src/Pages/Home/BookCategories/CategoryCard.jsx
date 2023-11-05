import React from 'react';
import { Link } from 'react-router-dom';

const CategoryCard = ({category}) => {
    console.log(category);
    const {image,categoryName,_id}= category
    console.log(categoryName);
    return (
 
    <Link to={`/bookcards/${categoryName}`}>
     <div data-aos="zoom-in-up" data-aos-duration="1100" className="flex items-center  md:w-full h-40 mb-2 justify-evenly  dark:bg-white border border-gray-200 rounded-lg  dark:border-gray-700">
  
        <img className="rounded-t-lg   h-[150px] w-2/3 " src={image} alt="" />
   
    <div className="p-5">
      <span>
      <p className="mb-3 font-normal text-2xl dark:text-white "> 
      <span className="text-yellow-600">Categories: </span> {categoryName} 
       </p>
       <button className="btn btn-outline btn-warning">See All Books</button>
     
      </span>
       
    </div>
</div>

    
    </Link>
    );
};




export default CategoryCard;