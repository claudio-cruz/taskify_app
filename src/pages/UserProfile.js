import React from 'react';
import { useCurrentUser } from "../contexts/CurrentUserContext";
import { Container, Row, Col, Image } from 'react-bootstrap';
import styles from "../styles/ProfilePage.module.css"

function UserProfile() {
  const currentUser = useCurrentUser();

  return (
    <Container fluid className="bg-light">
      <Row className={styles.profileImageContainer}>
        <div className="profile-image-container">
          <Image src={currentUser?.profile_image} alt="User Profile" fluid className={styles.profileImage }/>
          <div className="background-color"></div>
        </div>
      </Row>
      <Row className="justify-content-center mt-3">
        <Col xs={12} sm={9} md={6}>
          <h5 className="text-center mb-4">Username: {currentUser?.username}</h5>
          <h5 className="text-center mb-4">Email: {currentUser?.email}</h5>
          <h5 className="text-center mb-4">Bio: {currentUser?.bio}</h5>
        </Col>
      </Row>
    </Container>
  );
}

export default UserProfile;
