import React from "react";
import "../stylesheets/Information.css";

const Information = () => {
    return (
        <>
            <div className="InfoContainer container-fluid">
                <img
                    className="InfoImageMobile d-block w-100"
                    src="https://cdn.discordapp.com/attachments/989767720801304606/991227339423879198/unknown.png"
                />
                <div class="InfoImageMobileText">
                    <div className="InfoImageHeader"><strong>RefinedSzn</strong></div>
                    <div>We're a group of automotive enthusiast friends who came together to create a team of unique car builds. We love to hang out on the weekends and mob together to car meets.</div>
                </div>
            </div>
        </>
    );
}

export default Information;