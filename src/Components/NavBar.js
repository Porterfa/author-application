import React from 'react';
import {Link} from 'react-router-dom';
import './NavBar.css';
import {Nav, Navbar, NavLink } from 'react-bootstrap';

function NavBar() {
    return(
        <div className="nav__all">
            <Navbar collapseOnSelect expand="sm" bg="backgroundcolor">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <NavLink eventKey="1" as={Link} to="/">HOME</NavLink>
                        <NavLink eventKey="2" as={Link} to="/books">BOOKS</NavLink>
                        <NavLink eventKey="3" as={Link} to="/about">ABOUT</NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default NavBar;