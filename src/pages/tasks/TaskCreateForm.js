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

import { useHistory } from "react-router";
import { axiosReq } from "../../api/axiosDefaults";

function TaskCreateForm() {

  const [errors, setErrors] = useState({});


  const [taskData, setTaskData] = useState({
    task: "",
    due_date: "",
    description: "",
    priority: "",
    category: "",
  });
  const { task, due_date, description, priority, category } = taskData;

  const history = useHistory();

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDateChange = (event) => {
    setTaskData({
      ...taskData,
      due_date: event,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();

    formData.append("task", task);
    formData.append("due_date", due_date);
    formData.append("description", description);
    formData.append("priority", priority);
    formData.append("category", category);

    try {
      const { data } = await axiosReq.task("/tasks/", formData);
      history.push(`/tasks/${data.id}`);
    } catch (err) {
      if (err.response?.status !== 401) {
        setErrors(err.response?.data);
      }
    }

  };

  const textFields = (
    <div className="text-center">

      <Form.Group>
        <Form.Label>Task</Form.Label>
        <Form.Control
          type="text"
          name="task"
          value={task}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.task?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Due Date</Form.Label>
        <DatePicker
          name="due_date"
          selected={due_date}
          onChange={handleDateChange}
          dateFormat="yyyy-MM-dd"
          className="form-control"
        />
      </Form.Group>

      <Form.Group>
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={2}
          name="description"
          value={description}
          onChange={handleChange}
        />
      </Form.Group>
      {errors?.content?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Priority</Form.Label>
        <Form.Control
          as="select"
          name="priority"
          value={priority}
          onChange={handleChange}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </Form.Control>
      </Form.Group>
      {errors?.task?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control
          as="select"
          name="category"
          value={category}
          onChange={handleChange}
        >
          <option value="Other">Other</option>
          <option value="Study">Study</option>
          <option value="Finance">Finance</option>
          <option value="Work">Work</option>
          <option value="Sport">Sport</option>
          <option value="Social">Social</option>
          <option value="Home">Home</option>
        </Form.Control>
      </Form.Group>
      {errors?.task?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

      <Button className={styles.cancelbtn} onClick={() => history.goBack()}>Cancel</Button>
      <Button className={styles.submitbtn} type="submit">Create</Button>

    </div>
  );

  return (
    <Form onSubmit={handleSubmit}>
      <h3 className="text-center">Create new task</h3>
      <Row>
        <Col>
          <Container>{textFields}</Container>
        </Col>
      </Row>

    </Form>
  )
}

export default TaskCreateForm