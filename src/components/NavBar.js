import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from "../assets/logo.png";
import styles from "../styles/NavBar.module.css";
import { NavLink } from "react-router-dom";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../contexts/CurrentUserContext";
import Avatar from "./Avatar";
import axios from "axios";

const NavBar = () => {

    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();

    console.log(currentUser)

    const handleSignOut = async () => {
        try {
            await axios.post("dj-rest-auth/logout/");
            setCurrentUser(null);
        } catch (err) {
            console.log(err);
        }
    };

    const loggedInIcons = (
        <>
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
            <NavLink className={styles.NavLink} to="/" onClick={handleSignOut}>
                <i className="fa-solid fa-right-from-bracket"></i> Sign out
            </NavLink>
            <NavLink
                className={styles.NavLink}
                activeClassName={styles.Active}
                to={`/profiles/${currentUser?.profile_id}`}
            >
                <Avatar src={currentUser?.profile_image} text="Profile" height={40} />
            </NavLink>
        </>

    );



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
    );

    return (
        <Navbar className={styles.NavBar} expand="md" fixed="top">
            <Container fluid  className="p-0">

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
                    <Nav className="ml-auto text-left">

                        <NavLink exact
                            to="/"
                            className={styles.NavLink}
                            activeClassName={styles.Active}
                        >
                            <i className="fa-solid fa-house"></i> Home
                        </NavLink>

                        {currentUser ? loggedInIcons : loggedOutIcons}

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;