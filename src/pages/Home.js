import React from 'react';
import Annonce from '../components/Annonce';
import Categories from '../components/Categories';
import NavBar from '../components/NavBar';
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
        </div>
    );
}

export default Home;
