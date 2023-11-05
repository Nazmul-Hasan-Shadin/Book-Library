import { useState } from "react";
import useAxios from "../../Hooks/useAxios";
import { useLocation, useNavigate } from "react-router-dom";

const AddBooks = () => {
  const location = useLocation()
  console.log(location);
  const navigate= useNavigate()
  const axios= useAxios()
  const [category,setCategory]= useState();
  const handleAddBook=(e)=>{
    e.preventDefault()
    const form =  new FormData(e.currentTarget);
    const bookName= form.get('bookName')
    const bookImg= form.get('bookImg')
    const quantity= form.get('quantity')
    const desc= form.get('desc')
    const rating= form.get('rating')
  
  
    const author= form.get('author')
   
    console.log(bookName,bookImg,quantity,desc,author, category,rating);
   const formData={
     bookName,bookImg,quantity,desc,rating,category,author
   }

   
  
  axios.post('/books',formData,{withCredentials:true})
  .then(data=>{
    console.log(data);
  
  })


  }

   
  const handleChange=(e)=>{
    const value= e.target.value
      console.log(value);
      setCategory(value)

   }



    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         <h2 className='text-2xl'>Add book to database</h2>
      <form onSubmit={handleAddBook} >
     <div className="card-body grid grid-cols-1 md:grid-cols-2 w-full" >
     <div className="form-control">
          <label className="label">
            <span className="label-text">Book Name</span>
          </label>
          <input type="text" name='bookName' placeholder="Book Name" className="input input-bordered w-full" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Books Image</span>
          </label>
          <input type="text" name='bookImg' placeholder="books image url" className="input input-bordered" required />
    
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="number" name='quantity' placeholder="book quantity" className="input input-bordered" required />

        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Author Name</span>
          </label>
          <input type="text" name='author' placeholder="Author Name" className="input input-bordered" required />
    
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">cate</span>
          </label>
             <select onChange={handleChange} className="select select-info w-full max-w-xs">
            <option disabled selected>Select Category</option>
            <option>history</option>
            <option>commedy</option>
            <option>health</option>
            <option>horror</option>
            </select>
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" name="desc" placeholder="Short Description" className="input input-bordered" required />
   
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating" name="rating" className="input input-bordered" required />

        </div>
     </div>

    
     <div className="form-control mt-6">
        
        <input type="submit" value={'Add Book'} className="btn btn-primary" />
      </div>
       
       
      </form>
   

    </div>
  </div>
</div>
    );
};

export default AddBooks;