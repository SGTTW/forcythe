import React from 'react';
import HeroSection from './HeroSection';
import Footer from './Footer';
import Stats from './Stats';
import Testimonials from './Testimonials';
import Vision from './Vision';
import Blog from './Blog';
import B2B from './B2B';
import Carousel from './Carousel';

const Home = () => {
    return (
        <div>
         
            <HeroSection />
            <Carousel />
            <Testimonials />
            <Vision />
            <B2B />
            <Stats />
            <Blog />
            <Footer />
        </div>
    );
}

export default Home;
