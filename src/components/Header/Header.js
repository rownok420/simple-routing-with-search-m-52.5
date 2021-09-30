import React from "react";
import { NavLink } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

import "./Header.css";

const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "yellow",
        textDecoration: "underline",
    };
    return (
        <Navbar bg="success" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand className='fs-3' href="/home">Hungry Shark</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />

                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        navbarScroll
                    >
                        <NavLink activeStyle={activeStyle} to="/home">
                            Home
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/restautant">
                            Restaurant
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/category">
                            Category
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/pricing">
                            Pricing
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/menus">
                            Menus
                        </NavLink>
                        <NavLink activeStyle={activeStyle} to="/cart">
                            Cart
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;
