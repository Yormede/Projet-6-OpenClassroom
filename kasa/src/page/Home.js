import React from 'react';
import '../styles/_App.scss'
import Banner from '../components/banner/Banner';
import bannerImage from '../images/home_banner.webp'
import LodgingList from '../components/lodgingList/LodgingList';

const Home = () => {

    return (
        <main>
            <Banner src={bannerImage} alt="Image de montagne" bannerTitle="Chez vous, partout et ailleurs" />
            <LodgingList/>
        </main>
    );
};

export default Home;