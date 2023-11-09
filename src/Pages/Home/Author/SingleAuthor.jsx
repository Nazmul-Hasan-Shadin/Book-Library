import React from 'react';

const SingleAuthor = ({data}) => {
  
    return (
<div  data-aos="zoom-in-down" data-aos-duration='900'  className="card   bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={data.img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center">
    <h2  className="card-title text-yellow-500">{data.name}</h2>
    <h2 className="card-title">{data.role}</h2>
    <p>{data.desc}</p>
    {/* <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div> */}
  </div>
</div>
    );
};

export default SingleAuthor;