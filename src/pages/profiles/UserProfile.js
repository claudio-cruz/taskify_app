import React from 'react';
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from "../../styles/ProfilePage.module.css"
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function UserProfile() {
  const currentUser = useCurrentUser();

  return (
    <Container fluid className="bg-light">
      <Row>
        <Col xs={12} md={12} lg={12} className={`${styles.EditLink} d-flex justify-content-end`}>
        <Link
          to="/profiles/:id/edit"
        >
          <i className="fa-solid fa-pen-to-square fa-2xl"></i>
        </Link>
        </Col>

        <Col className={styles.profileImageContainer}>
        <div className="profile-image-container">
          <Image src={currentUser?.profile_image} alt="User Profile" fluid className={styles.profileImage} />
          <div className="background-color"></div>
        </div>
        </Col>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12}>
          <h5 className="text-center mb-4">Username: {currentUser?.username}</h5>
          <h5 className="text-center mb-4">Email: {currentUser?.email}</h5>
          <h5 className="text-center mb-4">Bio: {currentUser?.bio}</h5>
        </Col>
      </Row>
    </Container >
  );
}

export default UserProfile;
