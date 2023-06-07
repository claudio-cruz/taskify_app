import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import StyleAlerts from '../../styles/Alers.module.css'
import styles from "../../styles/SignForms.module.css";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";
import { useSetCurrentUser } from "../../contexts/CurrentUserContext";


function SignInForm() {
    const setCurrentUser = useSetCurrentUser();

    const [signInData, setSignInData] = useState({
        username: "",
        password: "",
    });
    const { username, password } = signInData;

    const [errors, setErrors] = useState({});
    const [logginAlert, setLogginAlert] = useState(null);
    const history = useHistory();

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { data } = await axios.post("/dj-rest-auth/login/", signInData);
            setCurrentUser(data.user);
            setLogginAlert(true)
            setTimeout(() => {
                setLogginAlert(false); // Reset success status after some time
                history.push(`/`);
            }, 2000);
        } catch (err) {
            setErrors(err.response?.data);
        }
    };

    const handleChange = (event) => {
        setSignInData({
            ...signInData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <Container className="d-flex justify-content-center align-items-center h-100">

            <Form className={styles.Form} onSubmit={handleSubmit}>

                <h1 className={styles.Header}>Sign In</h1>

                <Form.Group controlId="username">
                    <Form.Control
                        className={styles.Input}
                        type="text"
                        placeholder="Username"
                        name="username"
                        value={username}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.username?.map((message, idx) => (
                    <Alert variant="warning" key={idx}>
                        {message}
                    </Alert>
                ))}

                <Form.Group controlId="password">
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        name="password"
                        className={styles.Input}
                        value={password}
                        onChange={handleChange}
                    />
                </Form.Group>
                {errors.password?.map((message, idx) => (
                    <Alert key={idx} variant="warning">
                        {message}
                    </Alert>
                ))}

                <div className="text-center">
                    <Link className={styles.Link} to="/signup">
                        Don't have an account? <span>Sign up here!</span>
                    </Link>
                </div>

                <div className="text-center">
                    <Button className={styles.Button} type="submit">
                        Sign In
                    </Button>
                    <Alert
                        className={StyleAlerts.AlertMessage}
                        variant="success"
                        show={logginAlert}
                        onClose={() => setLogginAlert(false)}
                        dismissible
                    >
                        Log in successfully!
                    </Alert>
                    {errors.non_field_errors?.map((message, idx) => (
                        <Alert key={idx} variant="warning" className="mt-3">
                            {message}
                        </Alert>
                    ))}
                </div>
            </Form>
        </Container>
    );
};

export default SignInForm;