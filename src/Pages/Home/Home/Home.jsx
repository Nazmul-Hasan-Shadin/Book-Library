import React from 'react';
import Navbar from '../Navbar/Navbar';
import Banner from '../Banner/Banner';
import BookCategory from '../BookCategories/BookCategory';
import BookPromotion from '../BookPromotion/BookPromotion';
import Author from '../Author/Author';
import TopRatingBook from '../TopRatingBook/TopRatingBook';

const Home = () => {
    return (
     <div>
           
        <Banner></Banner>
        <BookCategory></BookCategory>
        <BookPromotion></BookPromotion>
        <TopRatingBook></TopRatingBook>
        <Author></Author>
     </div>
    );
};

export default Home;