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

function TaskCreateForm() {
  const [errors, setErrors] = useState({});
  const [taskCreateAlert, setTaskCreateAlert] = useState(false);

  const [taskData, setTaskData] = useState({
    task: "",
    due_date: null,
    description: "",
    priority: "low",
    category: "other",
  });
  const { task, due_date, description, priority, category } = taskData;

  const history = useHistory();

  const handleChange = (event) => {
    setTaskData({
      ...taskData,
      [event.target.name]: event.target.value,
    });
  };

  const handleDateChange = (date) => {
    setTaskData({
      ...taskData,
      due_date: date,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("task", task);
    if (due_date !== null) {
      formData.append("due_date", due_date.toISOString());
    }
    formData.append("description", description);
    formData.append("priority", priority);
    formData.append("category", category);

    try {
      await axiosReq.post("/tasks/", formData);
      setTaskCreateAlert(true); // Set success status to true
      setTimeout(() => {
        setTaskCreateAlert(false); // Reset success status after some time
        history.push(`/tasks/`);
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
          dateFormat="yyyy-MM-dd HH:mm"
          showTimeSelect
          timeFormat="HH:mm"
          timeIntervals={15}
          className="form-control"
        />
      </Form.Group>
      {errors?.task?.map((message, idx) => (
        <Alert variant="warning" key={idx}>
          {message}
        </Alert>
      ))}

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
      <h3 className="text-center">Create new task</h3>
      {taskCreateAlert && ( // Display the alert message if success is true
        <Alert
        className={StyleAlerts.AlertMessage}
        variant="success"
        onClose={() => setTaskCreateAlert(false)} dismissible>
          New task created successfully!
        </Alert>
      )}
      <Row>
        <Col>
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default TaskCreateForm;
