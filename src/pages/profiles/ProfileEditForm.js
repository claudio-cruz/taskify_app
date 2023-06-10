import React, { useState, useEffect, useRef } from "react";
import { useHistory, useParams } from "react-router-dom";

import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";

import Styles from '../../styles/Buttons.module.css'

import axios from "axios";
import { axiosReq } from "../../api/axiosDefaults";
import {
    useCurrentUser,
    useSetCurrentUser,
} from "../../contexts/CurrentUserContext";

function ProfileEditForm() {
    const currentUser = useCurrentUser();
    const setCurrentUser = useSetCurrentUser();
    const { id } = useParams();
    const history = useHistory();
    const imageFile = useRef();

    const [profilesData, setProfilesData] = useState({
        user: "",
        email: "",
        bio: "",
        image: "",
    });
    const { user, email, bio, image } = profilesData;

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`/profiles/${id}/`);
                const { user, email, bio, image } = response.data;

                if (currentUser) {
                    setProfilesData((prevProfilesData) => ({
                        ...prevProfilesData,
                        user,
                        email,
                        bio,
                        image,
                    }));
                } else {
                    history.push('/');
                }
            } catch (error) {
            }
        };
        fetchData();
    }, [history, currentUser, id]);

    const handleChange = (event) => {
        setProfilesData((profilesData) => ({
            ...profilesData,
            [event.target.name]: event.target.value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("user", user);
        formData.append("email", email);
        formData.append("bio", bio);

        if (imageFile?.current?.files[0]) {
            formData.append("image", imageFile?.current?.files[0]);
        }

        try {
            const { data } = await axiosReq.put(`/profiles/${id}/`, formData);
            setCurrentUser((currentUser) => ({
                ...currentUser,
                profile_image: data.image,
                user: data.user,
                email: data.email,
                bio: data.bio,
            }));
            history.goBack();
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    const textFields = (
        <>
            <Form.Group>
                <Form.Label>User Name:</Form.Label>
                <Form.Control
                    as="textarea"
                    value={user}
                    onChange={handleChange}
                    name="user"
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Email</Form.Label>
                <Form.Control
                    as="textarea"
                    value={email}
                    onChange={handleChange}
                    name="email"
                />
            </Form.Group>

            <Form.Group>
                <Form.Label>Bio</Form.Label>
                <Form.Control
                    as="textarea"
                    value={bio}
                    onChange={handleChange}
                    name="bio"
                    rows={5}
                />
            </Form.Group>

            {errors?.content?.map((message, idx) => (
                <Alert variant="warning" key={idx}>
                    {message}
                </Alert>
            ))}
            <Button className={Styles.cancelbtn} onClick={() => history.goBack()}>
                Cancel
            </Button>
            <Button className={Styles.submitbtn} type="submit">
                Edit
            </Button>
        </>
    );

    return (
        <Form onSubmit={handleSubmit}>
            <h3 className="text-center">Profile editor</h3>
            <Row>
                <Col className="py-2 p-0 p-md-2 text-center" md={7} lg={6}>
                    <Container>
                        <Form.Group>
                            {image && (
                                <figure>
                                    <Image src={image} fluid />
                                </figure>
                            )}
                            {errors?.image?.map((message, idx) => (
                                <Alert variant="warning" key={idx}>
                                    {message}
                                </Alert>
                            ))}
                            <div>
                                <Form.Label
                                    className='btn my-auto'
                                    htmlFor="image-upload"
                                >
                                    Change the image
                                </Form.Label>
                            </div>
                            <Form.File
                                id="image-upload"
                                ref={imageFile}
                                accept="image/*"
                                onChange={(e) => {
                                    if (e.target.files.length) {
                                        setProfilesData({
                                            ...profilesData,
                                            image: URL.createObjectURL(e.target.files[0]),
                                        });
                                    }
                                }}
                            />
                        </Form.Group>
                    </Container>
                </Col>
                <Col>
                    <Container>{textFields}</Container>
                </Col>
            </Row>
        </Form>
    )
}

export default ProfileEditForm;
