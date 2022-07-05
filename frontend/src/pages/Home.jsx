import React from "react"

import TopNavigation from '../components/TopNavigation';
import Gallery from '../components/Gallery';
import Information from '../components/Information';
import StickerSection from '../components/StickerSection';
import SubRoster from '../components/SubRoster';
import Footer from '../components/Footer';

const Home = () => {
    return (   
        <>
        <TopNavigation />
        <Gallery />
        <Information />
        <StickerSection />
        <SubRoster />
        <Footer />
        </>
    );
}

export default Home;