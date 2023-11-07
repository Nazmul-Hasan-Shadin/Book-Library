import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import BookCategory from '../BookCategories/BookCategory';
import BookPromotion from '../BookPromotion/BookPromotion';
import Author from '../Author/Author';

const Home = () => {
    return (
     <div>
           
        <Banner></Banner>
        <BookCategory></BookCategory>
        <BookPromotion></BookPromotion>
        <Author></Author>
     </div>
    );
};

export default Home;