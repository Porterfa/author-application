import React from 'react';
import './NavBar.css';
import {Nav, Navbar} from 'react-bootstrap';
import {Link, NavLink} from 'react-router-dom';

function NavBar() {
    return(
        <div className="nav__all">
            <Navbar>
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