import React from 'react';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from "../../styles/ProfilePage.module.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function UserProfile() {
  const currentUser = useCurrentUser();

  return (
    <Container fluid className="bg-light">
      <Row className={styles.profileImageContainer}>
        <Col md={12} lg={12} className='d-flex justify-content-end'>
          <Link
            to={`/profiles/${currentUser?.profile_id}/edit`}
            className={styles.EditLink}
          >
            <i className="fa-solid fa-pen-to-square fa-2xl"></i>
          </Link>
        </Col>
        <Col className='d-flex justify-content-center'>
          <div className="profile-image-container">
            <Image
              src={currentUser?.profile_image}
              alt="User Profile"
              className={`img-fluid ${styles.profileImage}`}
            />
            <div className="background-color"></div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12}>
          <h2 className="text-center mb-4"> {currentUser?.username}</h2>
        </Col>
        <Col xs={12}>
          <h4 className="text-center mb-4"> {currentUser?.email}</h4>
        </Col>
        <Col xs={12}>
          <p className="text-center mb-4">{currentUser?.bio}</p>
        </Col>
    </Row>
    </Container >
  );
}

export default UserProfile;
