import React from 'react';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

const TopNavigation = () => {
    return (
        <>
            <div className="NavigationBar navbar-dark">
                <Navbar bg="black"
                    sticky="top"
                    expand="lg"
                    collapseOnSelect>
                    <Navbar.Brand>
                        <img src="https://cdn.discordapp.com/attachments/978388869131165736/987971273500004382/RefinedW.png"
                            className="RefinedLogo d-block w-50 mx-auto"
                            alt="Refined Logo" />
                    </Navbar.Brand>

                    <Navbar.Toggle />
                    <Navbar.Collapse>
                        <Nav>
                            <Nav.Link className="NavButton px-5 text-white d-flex align-items-center" href="/">Home</Nav.Link>
                            <Nav.Link className="NavButton px-5 text-white d-flex align-items-center" href="/About">About Us</Nav.Link>
                            <Nav.Link className="NavButton px-5 text-white d-flex align-items-center" href="">Team Roster</Nav.Link>
                            <Nav.Link className="NavButton px-5 text-white d-flex align-items-center" href="">Contact</Nav.Link>
                            <Nav.Link className="NavButton px-5 text-white d-flex align-items-center" href="">Account</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </div>
        </>
    );
}

export default TopNavigation;