import React from 'react';
import Annonce from '../components/Annonce';
import Categories from '../components/Categories';
import Footer from '../components/Footer';
import NavBar from '../components/NavBar';
import Newsletter from '../components/Newsletter';
import Products from '../components/Products';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <div>
            <Annonce />
            <NavBar/>
            <Slider/>
            <Categories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    );
}

export default Home;
