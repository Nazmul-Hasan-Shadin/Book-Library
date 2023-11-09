import { useContext } from "react";
import { NavLink, Navigate } from "react-router-dom";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import logo from "../../../assets/logo/logo.png"
import {RxAvatar}from "react-icons/rx"
import useAxios from "../../../Hooks/useAxios";
import DarkMode from "../../../Layout/DarkMode";

const Navbar = ({changeTheme}) => {
const {user,logOut}=useContext(AuthContext)
const axios=useAxios()
const handleLogOut=()=>{

  axios.post('/logout')
  .then(res=>{
      <Navigate to={'/login'}></Navigate>
  })
  logOut()
}
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

 user ?       <NavLink  onClick={()=>handleLogOut()} className={({isActive})=> {
        isActive ? "true": ""
    }} > Logout</NavLink>:     <NavLink to={'/login'} className={({isActive})=> {
      isActive ? "true": ""
  }} > Login</NavLink>
    
    }
    
    
    
    
     </li>
     
    
    </>


    return (
    <section className="w-full">
      <div className="navbar -mb-6 pb-6 bg-[#efe6d5] ">
  <div className="navbar-start ">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content   mt-3  p-2 shadow bg-base-100 rounded-box w-52">
 {
    links
 }
      </ul>
    </div>
  
 
 
  <img src={logo} className="w-20 h-20" alt="" />





    
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu  menu-horizontal px-1 gap-8">
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
       {   user?   <img src={user?.photoURL
} alt="" /> :<RxAvatar className="text-4xl"></RxAvatar>
}

        </div>
       
      </label>
      <ul  tabIndex={0} className="mt-3 z-20  p-2 shadow menu  menu-sm dropdown-content bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            {user?.displayName}
           
          </a>
        </li>
        <li><a>Settings</a></li>
        
        <li onClick={()=>handleLogOut()} ><a>Logout</a></li>
      </ul>
    </div>
    <a className=" hidden lg:block font-bold ml-10"> {user?.displayName} </a>
     <DarkMode changeTheme={changeTheme}></DarkMode>
  </div>
</div>
    </section>
    );
};

export default Navbar;