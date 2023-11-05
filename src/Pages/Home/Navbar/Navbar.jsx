import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";

const Navbar = () => {
const {user,logOut}=useContext(AuthContext)
    const links= <>
    <li> <NavLink to={'/'} className={({isActive})=> 
        isActive ? "active": ""
    } > Home</NavLink> </li>

<li> <NavLink to={'/addbooks'} className={({isActive})=> {
        isActive ? "true": ""
    }} > Add Book</NavLink> </li>
        <li> <NavLink to={'/allbooks'} className={({isActive})=> {
        isActive ? "true": ""
    }} > All Books,</NavLink> </li>
        <li> <NavLink to={'/borrowed-books'} className={({isActive})=> { 
        isActive ? "true": ""
    }} > Borrowed Books</NavLink> </li>
        <li> 
            
{     

 user ?       <NavLink  onClick={()=>logOut()} className={({isActive})=> {
        isActive ? "true": ""
    }} > Logout</NavLink>:     <NavLink to={'/login'} className={({isActive})=> {
      isActive ? "true": ""
  }} > Login</NavLink>
    
    }
    
    
    
    
     </li>
     
    
    </>


    return (
<div className="navbar bg-base-100">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content   mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
 {
    links
 }
      </ul>
    </div>
    <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-8">
         {
            links
         }
    </ul>
  </div>
  {/*  user profile image */}
  <div className="navbar-end lg:flex lg:flex-row-reverse gap-12">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
        <div className="w-10 rounded-full">
        <img src={user?.photoURL
} alt="" />


        </div>
       
      </label>
      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            {user?.displayName}
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
    <p className=" hidden lg:block text-black ml-10"> {user?.displayName} </p>
  </div>
</div>
    );
};

export default Navbar;