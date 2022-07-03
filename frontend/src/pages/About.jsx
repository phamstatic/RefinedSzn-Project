import React from "react"
import '../stylesheets/About.css';

import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";

const About = () => {
    return (
        <>
            <TopNavigation />

            <img
                className="d-block w-100"
                src="https://cdn.discordapp.com/attachments/989767720801304606/992297000416587866/unknown.png"
            />
            <div className="AboutContainer container-fluid">
                <div className="AboutRow row">
                    <div className="AboutColumn col-6">
                        <div className="AboutTitleTop row align-items-center justify-content-left">OUR TEAM</div>
                        <div className="AboutTitle row align-items-center justify-content-left">RefinedSzn</div>
                        <div className="AboutInfo row align-items-center justify-content-left">Founded in December of 2020, RefinedSzn started as a group of automotive enthusiast friends who came together to create a team of unique car builds. Although we've had members come and leave, what is left behind is a true unbreakable family.</div>
                        <div className="AboutInfo row align-items-center justify-content-left"><br></br></div>
                        <div className="AboutInfo row align-items-center justify-content-left">We're always hanging around Houston's Chinatown, so if you see us come mob with us!</div>
                        <div className="AboutInfo row align-items-center justify-content-left"><br></br></div>
                        <div className="AboutInfo row align-items-center justify-content-left">#ComeBackSzn</div>
                    </div>

                    <div className="col-6">
                        <img
                            className="AboutImage d-block w-100"
                            src="https://cdn.discordapp.com/attachments/989767720801304606/992303865758236682/unknown.png"
                        />
                    </div>
                </div>
            </div>
            <div className="MobileAboutContainer container-fluid">
                <div className="MobileAboutTitleTop text-center"><br></br>OUR TEAM</div>
                <div className="MobileAboutTitle text-center">RefinedSzn</div>
                <div className="MobileAboutInfo text-center">Founded in December of 2020, RefinedSzn started as a group of automotive enthusiast friends who came together to create a team of unique car builds. Although we've had members come and leave, what is left behind is a true unbreakable family.
                </div>
                <img
                    className="AboutImage d-block w-100"
                    src="https://cdn.discordapp.com/attachments/989767720801304606/992303865758236682/unknown.png"
                />
                <div><br></br></div>
            </div>

            <Footer />
        </>
    );
}

export default About;