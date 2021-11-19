import React from 'react';
import Annonce from '../components/Annonce';
import NavBar from '../components/NavBar';
import Slider from '../components/Slider';

const Home = () => {
    return (
        <div>
            <Annonce/>
            <NavBar/>
            <Slider/>
        </div>
    );
}

export default Home;
