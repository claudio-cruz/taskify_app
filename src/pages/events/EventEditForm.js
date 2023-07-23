import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../../styles/Buttons.module.css';

function EventEditForm() {
  const [errors, setErrors] = useState({});
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
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/events/${id}/`);
        const {
          event,
          description,
          start_time,
          end_time,
          repeat,
          priority,
          category,
          is_owner,
        } = response.data;

        if (is_owner) {
          const parsedStartTime = start_time ? new Date(start_time) : null;
          const parsedEndTime = end_time ? new Date(end_time) : null;
          setEventData((prevEventData) => ({
            ...prevEventData,
            event,
            description,
            start_time: parsedStartTime,
            end_time: parsedEndTime,
            repeat,
            priority,
            category,
          }));
        } else {
          history.push('/');
        }
      } catch (error) {
      }
    };

    fetchData();
  }, [history, id]);

  const handleChange = (input) => {
    setEventData((prevEventData) => ({
      ...prevEventData,
      [input.target.name]: input.target.value,
    }));
  };

  const handleStartDateChange = (date) => {
    setEventData((prevEventData) => ({
      ...prevEventData,
      start_time: date,
    }));
  };

  const handleEndtDateChange = (date) => {
    setEventData((prevEventData) => ({
      ...prevEventData,
      end_time: date,
    }));
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
      await axios.put(`/events/${id}/`, formData);
      history.push(`/events/`);
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
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
          onChange={handleEndtDateChange}
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
        Edit
      </Button>
    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <h3 className="text-center">Event editor</h3>
      <Row>
        <Col>
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  )
}

export default EventEditForm