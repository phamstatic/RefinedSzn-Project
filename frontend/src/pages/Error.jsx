import React from "react"
import '../App.css';

import Disclaimer from "../components/Disclaimer";
import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";

const Error = () => {
    return (
        <>
            <Disclaimer />
            <TopNavigation />
            <img
                className="d-block w-100"
                src="https://cdn.discordapp.com/attachments/989767720801304606/992295833078865970/unknown.png"
            />
            <Footer />
        </>
    );
}


export default Error;