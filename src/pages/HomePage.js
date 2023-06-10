import React from 'react'

import tasksImage from '../assets/tasksImage.png'
import notesImage from '../assets/notesImage.png'
import logo from '../assets/logo.png'

import { Col, Container, Row } from 'react-bootstrap'
import Styles from '../styles/HomePage.module.css'
import Buttons from '../styles/Buttons.module.css'
import { useCurrentUser } from '../contexts/CurrentUserContext';
import { Link, NavLink } from 'react-router-dom/cjs/react-router-dom.min'

function HomePage() {

  const currentUser = useCurrentUser();

  return (
    <>
      <Container>
        <Row>
          <div className='container-fluid'>
            <h3 className={Styles.Title}>
              Welcome to <img src={logo} height="45" alt="Taskify logo" />
              <span style={{ fontWeight: 'bold' }}>Taskify</span>
            </h3>
            <p>
              At Taskify, we believe in empowering you to take control of your
              life and make the most out of every day. Whether you're a busy
              professional, a student, or simply someone seeking better
              organization, our task app is here to assist you in managing your
              daily tasks, and notebooks—all in one place.
            </p>
            <p>
              Our mission is to provide you with a seamless and intuitive platform
              that helps you stay on top of your commitments and achieve your
              goals. With our user-friendly interface, you can effortlessly create
              and organize tasks, set reminders for important events, establish
              healthy habits, and maintain digital notebooks for all your ideas,
              plans, and inspirations.
            </p>
          </div>
        </Row>

        {/* Render different content based on the user's authentication status */}
        {currentUser ? (
          
          <Container>
            <Row className={Styles.Rows}>

              {/* Link to the Tasks page */}
              <Col>
                <Link to="/tasks">
                  <h3>Tasks</h3>
                  <img src={tasksImage} height="80" alt="Tasks logo" />
                </Link>
              </Col>

              {/* Link to the Notes page */}
              <Col>
                <Link to="/notes">
                  <h3>Notes</h3>
                  <img src={notesImage} height="80" alt="Notes logo" />
                </Link>
              </Col>
            </Row>
          </Container>

        ) : (

          <Container className="text-center">
            {/* Button to navigate to the Sign In page */}
            <button className={Buttons.button}>
              <NavLink to="/signin">
                <i className="fa-solid fa-right-to-bracket"></i> Sign in
              </NavLink>
            </button>

            {/* Button to navigate to the Sign Up page */}
            <button className={Buttons.button}>
              <NavLink
                to="/signup">
                <i className="fa-solid fa-user-plus"></i> Sign up
              </NavLink>
            </button>
          </Container>
        )}</Container>
    </>
  );
}

export default HomePage;