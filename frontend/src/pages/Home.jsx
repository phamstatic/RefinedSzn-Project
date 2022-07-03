import React from "react"
import '../stylesheets/Home.css';

import TopNavigation from '../components/TopNavigation';
import Gallery from '../components/Gallery';
import Information from '../components/Information';
import StickerSection from '../components/StickerSection';
import Footer from '../components/Footer';

const Home = () => {
    return (   
        <>
        <TopNavigation />
        <Gallery />
        <Information />
        <StickerSection />
        <Footer />
        </>
    );
}

export default Home;