import React from 'react';
import { Link } from 'react-router-dom';


const CategoryCard = ({category}) => {
 
    const {image,categoryName,_id}= category


    return (
  <div className='overflow-x-hidden'>
        <div data-aos="zoom-out-down"   data-aos-duration="1000" className='card '>
         
         <Link to={`/bookcards/${categoryName}`}>
          <div className="flex items-center  md:w-full h-40 mb-2 justify-  dark:bg-white border border-gray-200 rounded-lg  ">
       
          <figure>
                <img className="rounded-t-lg  w-[300px]  h-[150px]  " src={image} alt="" />
          </figure>
        
         <div className="p-5 md:ml-20">
           <span>
           <p className="mb-3 font-normal lg:text-2xl dark:text-white "> 
           <span className="text-yellow-600">Categories:</span>{categoryName} 
            </p>
            <button className="btn btn-outline btn-warning btn-sm lg:btn-md">See All Books</button>
          
           </span>
            
         </div>
     </div>
     
         
         </Link>
         </div>
  </div>
    );
};




export default CategoryCard;