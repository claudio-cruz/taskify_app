import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';

import styles from '../../styles/Buttons.module.css';

function HabitEditeForm() {
  const [errors, setErrors] = useState({});
  const [habitData, setHabitData] = useState({
    title: "",
    description: "",
    frequency: "",
    priority: "",
    category: "",
  });

  const { title, description, frequency, priority, category } = habitData;
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    // Fetch habit data from the server when the component mounts
    const fetchData = async () => {
      try {
        const response = await axios.get(`/habits/${id}/`);
        const { title, description, frequency, priority, category, is_owner } = response.data;

        if (is_owner) {
          setHabitData((prevHabitData) => ({
            ...prevHabitData,
            title,
            description,
            frequency,
            priority,
            category,
          }));
        } else {
          // If user is not the owner, redirect to home page
          history.push('/');
        }
      } catch (error) {
      }
    };

    fetchData();
  }, [history, id]);

  const handleChange = (event) => {
    // Update the habitData state based on input field changes
    setHabitData((prevHabitData) => ({
      ...prevHabitData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('description', description);
    formData.append('frequency', frequency);
    formData.append('priority', priority);
    formData.append('category', category);

    try {
      await axios.put(`/habits/${id}/`, formData);
      history.push(`/habits/`);
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          name="title"
          value={title}
          onChange={handleChange} />
      </Form.Group>
      {errors?.title?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Frequency</Form.Label>
        <Form.Control
          as="select"
          name="frequency"
          value={frequency}
          onChange={handleChange}
        >
          <option value="ones a week">Ones a week</option>
          <option value="two times a week">Twice a week</option>
          <option value="three times a week">Three times a week</option>
          <option value="four times a week">Four times a week</option>
          <option value="five times a week">Five times a week</option>
          <option value="six times a week">Six times a week</option>
          <option value="daily">Daily</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Priority</Form.Label>
        <Form.Control
          as="select"
          name="priority"
          value={priority}
          onChange={handleChange}
        >
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={category}
          onChange={handleChange}
        >
          <option value="other">Other</option>
          <option value="study">Study</option>
          <option value="finance">Finance</option>
          <option value="work">Work</option>
          <option value="sport">Sport</option>
          <option value="social">Social</option>
          <option value="home">Home</option>
        </Form.Control>
      </Form.Group>

      <Button className={styles.cancelbtn} onClick={() => history.goBack()}>
        Cancel
      </Button>
      <Button className={styles.submitbtn} type="submit">
        Edit
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <h3 className="text-center">Habit editor</h3>
      <Row>
        <Col>
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  )
}

export default HabitEditeForm