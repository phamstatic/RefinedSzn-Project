import React from "react";
import "../stylesheets/FAQ.css";

import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";

const FAQ = () => {
    return (
        <>
            <TopNavigation />

            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="FAQHeader">FREQUENTLY ASKED QUESTIONS</div>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="Question1">"How do you join RefinedSzn?"</div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default FAQ;