import React from 'react';

const AddBooks = () => {
    return (
<div className="hero min-h-screen bg-base-200">
  <div className="hero-content flex-col lg:flex-row-reverse">

    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
      <form className="card-body grid grid-cols-1 md:grid-cols-2">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Book Name</span>
          </label>
          <input type="text" name='bookName' placeholder="Book Name" className="input input-bordered" required />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Books Image</span>
          </label>
          <input type="text" placeholder="books image url" className="input input-bordered" required />
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Quantity</span>
          </label>
          <input type="number" placeholder="book quantity" className="input input-bordered" required />

        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Author Name</span>
          </label>
          <input type="text" placeholder="Author Name" className="input input-bordered" required />
    
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">cate</span>
          </label>
             <select className="select select-info w-full max-w-xs">
            <option disabled selected>Select Category</option>
            <option>History</option>
            <option>Commedy</option>
            <option>Health</option>
            <option>Horrors</option>
            </select>
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Description</span>
          </label>
          <input type="text" placeholder="Short Description" className="input input-bordered" required />
   
        </div>


        <div className="form-control">
          <label className="label">
            <span className="label-text">Rating</span>
          </label>
          <input type="text" placeholder="Rating" className="input input-bordered" required />

        </div>

        


        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default AddBooks;