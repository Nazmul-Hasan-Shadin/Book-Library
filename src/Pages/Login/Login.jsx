import React from 'react';
import {AiFillLock,AiFillFacebook,AiOutlineTwitter}from 'react-icons/ai'
import {GoPeople} from 'react-icons/go'
import {FcGoogle} from 'react-icons/fc'
import { Link } from 'react-router-dom';
const Login = () => {
    return (
<div className="hero min-h-screen  bg-base-200">
  <div className="hero-content flex-col">
    
    <div className="card flex-shrink-0 w-full max-w-sm   shadow-2xl bg-base-100">
    <h2 className='tect-center text-3xl'>Login</h2>
      <form className="card-body mx-auto -ml-5 ">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Your Email</span>
          </label>
        <span className='relative'>
        <GoPeople className='absolute left-2 top-1/3'></GoPeople>
          <input type="email" placeholder="Type Your email" className="input border border-b-slate-400 border-t-0 border-x-0 px-7" required />
        </span>
        </div>
        <div className="form-control">
          <label className="label">
           <span className="label-text ">Password</span>
          </label>
          
        <span className='relative'>
            <AiFillLock  className='absolute top-1/3 left-2'></AiFillLock>  
        <input  type="password" placeholder="type your password" className="input  px-7 border border-b-slate-400 border-t-0 border-x-0 " required />
            </span>    
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>
        <div className="form-control  mt-6">
        <input type="button" className='btn btn-primary   bg-gradient-to-r from-[#22c3d8] via-purple-500 to-pink-500' value={"Login"} name="" id="" />
        </div>
        <p>Or Sign In with</p>
        <div className='form-control'>
          <span className=' flex gap-4 justify-center text-3xl'>
          <FcGoogle></FcGoogle>
          <AiFillFacebook className='text-blue-700 rounded-full'></AiFillFacebook>
          <AiOutlineTwitter className='text-blue-700'></AiOutlineTwitter>


          </span>
        </div>
        <p>
            Have not Account ? <Link to={'/register'}>Sign Up</Link>
        </p>
        <div>

        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Login;