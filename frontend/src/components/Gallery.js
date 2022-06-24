import React from 'react';
import {Carousel} from 'react-bootstrap';

const Gallery = () => {
    return (
        <>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.discordapp.com/attachments/989767720801304606/989767861344014417/Ryans_Q50.png"
                        alt="Ryan's Q50"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.discordapp.com/attachments/989767720801304606/989769132322996294/Kevins_Veloster.png"
                        alt="Kevin's Veloster"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.discordapp.com/attachments/989767720801304606/989769146613006396/Johns_Camry.png"
                        alt="John's Camry"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Gallery;