import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import styles from "../../styles/Buttons.module.css";
import StyleAlerts from '../../styles/Alers.module.css'
import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function EventCreateForm() {
  const [errors, setErrors] = useState({});
  const [eventCreateAlert, setEventCreateAlert] = useState(false);

  const [eventData, setEventData] = useState({
    event: "",
    description: "",
    start_time: null,
    end_time: null,
    repeat: "none",
    priority: "low",
    category: "other",
  });
  const {
    event,
    description,
    start_time,
    end_time,
    repeat,
    priority,
    category
  } = eventData;

  const history = useHistory();

  const handleChange = (input) => {
    setEventData({
      ...eventData,
      [input.target.name]: input.target.value,
    });
  };

  const handleStartDateChange = (date) => {
    setEventData({
      ...eventData,
      start_time: date,
    });
  };

  const handleEndDateChange = (date) => {
    setEventData({
      ...eventData,
      end_time: date,
    });
  };

  const handleSubmit = async (input) => {
    input.preventDefault();

    const formData = new FormData();

    formData.append("event", event);
    formData.append("description", description);
    if (start_time !== null) {
      formData.append("start_time", start_time.toISOString());
    }
    if (end_time !== null) {
      formData.append("end_time", end_time.toISOString());
    }
    formData.append("repeat", repeat);
    formData.append("priority", priority);
    formData.append("category", category);

    try {
      await axiosReq.post("/events/", formData);
      setEventCreateAlert(true);
      setTimeout(() => {
        setEventCreateAlert(false);
        history.push(`/events/`);
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
        <Form.Label>Event</Form.Label>
        <Form.Control
          type="text"
          name="event"
          value={event}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.event?.map((message, idx) => (
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
        <Form.Label>Start time</Form.Label>
        <DatePicker
          name="start_time"
          selected={start_time}
          onChange={handleStartDateChange}
          dateFormat="yyyy-MM-dd HH:mm"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          className="form-control"
        />
      </Form.Group>
      {errors?.event?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>End time</Form.Label>
        <DatePicker
          name="end_time"
          selected={end_time}
          onChange={handleEndDateChange}
          dateFormat="yyyy-MM-dd HH:mm"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          className="form-control"
        />
      </Form.Group>
      {errors?.event?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Repeat</Form.Label>
        <Form.Control
          as="select"
          name="repeat"
          value={repeat}
          onChange={handleChange}
        >
          <option value="none">No repeat</option>
          <option value="yearly">Once a Year</option>
          <option value="monthly">Once a Month</option>
          <option value="weekly">Once a Week</option>
          <option value="daily">Everyday</option>
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
      <h3 className="text-center">Create new event</h3>
      {eventCreateAlert && ( // Display the alert message if success is true
        <Alert
        className={StyleAlerts.AlertMessage}
        variant="success"
        onClose={() => setEventCreateAlert(false)} dismissible>
          New event created successfully!
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

export default EventCreateForm