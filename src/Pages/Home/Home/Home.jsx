import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import BookCategory from '../BookCategories/BookCategory';

const Home = () => {
    return (
     <div>
           
        <Banner></Banner>
        <BookCategory></BookCategory>
     </div>
    );
};

export default Home;