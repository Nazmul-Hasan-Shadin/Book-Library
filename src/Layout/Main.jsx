import React, { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Pages/Home/Navbar/Navbar';
import Footer from '../Pages/Home/Footer/Footer';
import AOS from 'aos';
import 'aos/dist/aos.css';
const Main = () => {
    const [darkMode,setDarkMode]= useState("light");
    let html= document.documentElement;
        
    const changeTheme=()=>{
       if (darkMode=="light") {
        html.setAttribute('data-theme','dark')
        setDarkMode('dark')
        localStorage.setItem('mode','dark')
       }
       else{

        html.setAttribute('data-theme','light')
        setDarkMode('light')
        localStorage.setItem('mode','light')
        

       }
    }
   
    useEffect(()=>{
        const currentMode= localStorage.getItem('mode') || 'light'
        if (currentMode) {
            setDarkMode(currentMode)
          
            html.setAttribute('data-theme',currentMode)
        }
    },[])

    AOS.init();
    return (
        <div className='max-w-7xl mx-auto'>
        


       
            <Navbar  changeTheme={changeTheme}></Navbar>
            <Outlet></Outlet>
        
            <Footer></Footer>
        </div>
    );
};

export default Main;