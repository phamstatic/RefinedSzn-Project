import React from 'react';
const TopHeader = () => {
    return (
        <>
            <div className="Disclaimer container-fluid bg-light">THIS WEBSITE IS STILL IN DEVELOPMENT!</div>
            <div className="Heading container-fluid bg-black text-center">
                <div className="row align-items-start">
                    <div className="LeftHeader col-4 p-3">
                        <div className="buttonRow row container-fluid">
                            <div className="aButton col-4">HOME</div>
                            <div className="aButton col-4">ABOUT US</div>
                            <div className="aButton col-4">TEAM ROSTER</div>
                        </div>
                    </div>
                    <div className="Logo col-4 p-3">
                        <img
                            src="https://cdn.discordapp.com/attachments/978388869131165736/987971273500004382/RefinedW.png"
                            alt="Refined Logo"
                            height="50px"
                            width="auto"
                        />
                    </div>
                    <div className="RightHeader col-4 p-3">
                        <div className="buttonRow row container-fluid">
                            <div className="aButton col-6">CONTACT</div>
                            <div className="aButton col-6">ACCOUNT</div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default TopHeader;