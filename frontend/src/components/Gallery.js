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
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.discordapp.com/attachments/989767720801304606/990869518588969070/unknown.png"
                        alt="Vy's IS350"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.discordapp.com/attachments/989767720801304606/990868753057202226/unknown.png"
                        alt="Chris's BRZ"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.discordapp.com/attachments/989767720801304606/990867760450007070/unknown.png"
                        alt="Daniel's Q60"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://cdn.discordapp.com/attachments/989767720801304606/990871003401961512/unknown.png"
                        alt="Jojo's GS350 and Chris's BRZ"
                    />
                </Carousel.Item>
            </Carousel>
        </>
    );
}

export default Gallery;