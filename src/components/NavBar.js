import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import { useCurrentUser } from '../contexts/CurrentUserContext';

const NavBar = () => {

    const currentUser = useCurrentUser();

    const loggedInIcons = <>{currentUser?.username}</>

    const loggedOutIcons = (
        <>
            <NavLink
                to="/signin"
                className={styles.NavLink}
                activeClassName={styles.Active}
            >
                <i className="fa-solid fa-right-to-bracket"></i> Sign in
            </NavLink>
            <NavLink
                to="/signup"
                className={styles.NavLink}
                activeClassName={styles.Active}
            >
                <i className="fa-solid fa-user-plus"></i> Sign up
            </NavLink>
        </>
    )

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container fluid>

                <NavLink to="/">
                    <Navbar.Brand className="d-flex align-items-center">
                        <img src={logo} height="45" alt="Taskify logo" />
                        <span
                            className="ml-2 font-weight-bold d-none d-md-block"
                            style={{ fontSize: "2rem", fontFamily: "Noto Serif" }}
                        >
                            Taskify
                        </span>
                    </Navbar.Brand>
                </NavLink>

                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto text-right">
                        <NavLink exact
                            to="/"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                        >
                            <i className="fa-solid fa-house"></i> Home
                        </NavLink>
                        <NavLink
                            to="/tasks"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                        >
                            <i className="fa-solid fa-square-check"></i> Tasks
                        </NavLink>
                        <NavLink
                            to="/events"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                        >
                            <i className="fa-solid fa-calendar-days"></i> Events
                        </NavLink>
                        <NavLink
                            to="/habits"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                        >
                            <i className="fa-solid fa-repeat"></i> Habits
                        </NavLink>
                        <NavLink
                            to="/notes"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                        >
                            <i className="fa-solid fa-clipboard"></i> Notes
                        </NavLink>
                        {currentUser ? loggedInIcons : loggedOutIcons}
                    </Nav>
                </Navbar.Collapse>

            </Container>
        </Navbar>
    )
}

export default NavBar;