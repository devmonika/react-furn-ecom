import React from 'react';
import BestSeller from '../BestSeller/BestSeller';
import Blog from '../Blog/Blog';
import Displayprod from '../DisplayProd/Displayprod';
import Features from '../Feature/Features';
import Subscribe from '../Subscription/Subscribe';
import Testimonial from '../Testimonial/Testimonial';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Displayprod></Displayprod>
            <BestSeller></BestSeller>
            <Features></Features>
            <Testimonial></Testimonial>
            <Subscribe></Subscribe>
            <Blog></Blog>
          
        </div>
    );
};

export default Home;