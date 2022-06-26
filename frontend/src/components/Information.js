import React from 'react';
const Information = () => {
    return (
        <>
        <div className="InfoContainer container-fluid">
            <div class="MainContainer row">
                <div className="InfoLeft col-4 d-flex">
                    <p className="InfoLeft"><strong>RefinedSzn</strong>
                    <p className="">We're a group of automotive enthusiast friends who came together to create a team of unique car builds. We love to hang out on the weekends and mob together to car meets whenever one pops up. Our squad is very well known in the streets of Houston's Chinatown.</p>
                    </p>
                </div>
                <div className="col-8 d-flex justify-content-center">
                        <img src="https://cdn.discordapp.com/attachments/989767720801304606/990500758715781181/unknown.png"
                        className="d-block w-100"
                        alt="Picture of the Crew" />
                </div>
            </div>
        </div>
        </>
    );
}

export default Information;