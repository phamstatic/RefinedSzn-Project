import React from "react";
import "../stylesheets/Footer.css";

const Footer = () => {
    return (
        <>
            <footer className="page-footer font-small pt-4 bg-black">
                <div className="container-fluid text-center text-md-left">
                    <div className="row">
                        <div className="col">
                            <div className="FooterText">This website was created as a fun web development project to learn JavaScript and HTML/CSS using the React library.
                            </div>
                            <div className="FooterText">You can find the rest of my work&nbsp;<a className="FooterTextHyperLink" href="https://github.com/phamstatic">here</a>.</div>
                        </div>
                    </div>
                </div>
                <img src="https://cdn.discordapp.com/attachments/978388869131165736/987971273500004382/RefinedW.png"
                            className="FooterLogo d-block mx-auto"
                            alt="Refined Logo" />
                <div className="footer-copyright text-center py-3">© 2022 RefinedSzn All Rights Reserved
                </div>

            </footer>
        </>
    );
}

export default Footer;