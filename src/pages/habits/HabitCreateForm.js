import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import styles from "../../styles/Buttons.module.css";
import StyleAlerts from '../../styles/Alers.module.css'
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function HabitCreateForm() {
  const [errors, setErrors] = useState({});
  const [habitCreateAlert, setHabitCreateAlert] = useState(false);

  const [habitData, setHabitData] = useState({
    title: "",
    description: "",
    frequency: "ones a week",
    priority: "low",
    category: "other",
  });
  const { title, description, frequency, priority, category } = habitData;

  const history = useHistory();

  const handleChange = (event) => {
    setHabitData({
      ...habitData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("description", description);
    formData.append("frequency", frequency);
    formData.append("priority", priority);
    formData.append("category", category);

    try {
      await axiosReq.post("/habits/", formData);
      setHabitCreateAlert(true);
      setTimeout(() => {
        setHabitCreateAlert(false);
        history.push(`/habits/`);
      }, 2000);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
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
          onChange={handleChange}
        />
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
        Create
      </Button>
    </div>
  );


  return (
    <Form onSubmit={handleSubmit}>
      <h3 className="text-center">Create a habit</h3>
      {/* Display the alert message if success is true */}
      {habitCreateAlert && (
        <Alert
          className={StyleAlerts.AlertMessage}
          variant="success"
          onClose={() => setHabitCreateAlert(false)} dismissible>
          New habit created successfully!
        </Alert>
      )}
      <Row>
        <Col>
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  )
}

export default HabitCreateForm