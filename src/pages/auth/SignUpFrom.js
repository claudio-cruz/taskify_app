import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import StyleAlerts from '../../styles/Alers.module.css'
import styles from "../../styles/SignForms.module.css";
import { Form, Button, Container, Alert } from "react-bootstrap";
import axios from "axios";

const SignUpForm = () => {
  const [signUpData, setSignUpData] = useState({
    username: "",
    email: "",
    password1: "",
    password2: "",
  });
  const { username, email, password1, password2 } = signUpData;

  const [errors, setErrors] = useState({});
  const [loggoutAlert, setLoggoutAlert] = useState(null);
  const history = useHistory();

  const handleChange = (event) => {
    setSignUpData({
      ...signUpData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await axios.post("/dj-rest-auth/registration/", signUpData);
      setLoggoutAlert(true)
            setTimeout(() => {
                setLoggoutAlert(false); // Reset success status after some time
                history.push(`/`);
            }, 2000);
    } catch (err) {
      setErrors(err.response?.data);
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center h-100">

      <Alert
        className={StyleAlerts.AlertMessage}
        variant="success"
        show={loggoutAlert}
        onClose={() => setLoggoutAlert(false)}
        dismissible
      >
        Sing up successfully!
      </Alert>

      <Form className={styles.Form} onSubmit={handleSubmit}>

        <h1 className={styles.Header}>Sign Up</h1>

        <Form.Group controlId="username">
          <Form.Label className="d-none">username</Form.Label>
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

        <Form.Group controlId="email">
          <Form.Label className="d-none">email</Form.Label>
          <Form.Control
            className={styles.Input}
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.email?.map((message, idx) => (
          <Alert variant="warning" key={idx}>
            {message}
          </Alert>
        ))}

        <Form.Group controlId="password1">
          <Form.Label className="d-none">Password</Form.Label>
          <Form.Control
            className={styles.Input}
            type="password"
            placeholder="Password"
            name="password1"
            value={password1}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password1?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <Form.Group controlId="password2">
          <Form.Label className="d-none">Confirm password</Form.Label>
          <Form.Control
            className={styles.Input}
            type="password"
            placeholder="Confirm password"
            name="password2"
            value={password2}
            onChange={handleChange}
          />
        </Form.Group>
        {errors.password2?.map((message, idx) => (
          <Alert key={idx} variant="warning">
            {message}
          </Alert>
        ))}

        <div className="text-center">
          <Link className={styles.Link} to="/signin">
            Already have an account? <span>Sign in</span>
          </Link>

        </div>

        <div className="text-center">
          <Button className={styles.Button} type="submit">
            Sign up
          </Button>
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

export default SignUpForm;