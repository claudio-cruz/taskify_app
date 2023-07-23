import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import axios from 'axios';
import { Form, Button, Row, Col, Container, Alert } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import styles from '../../styles/Buttons.module.css';

function TaskEditForm() {
  const [errors, setErrors] = useState({});
  const [taskData, setTaskData] = useState({
    task: '',
    due_date: null,
    description: '',
    priority: 'low',
    category: 'other',
  });

  const { task, due_date, description, priority, category } = taskData;
  const history = useHistory();
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/tasks/${id}/`);
        const {
          task,
          due_date,
          description,
          priority,
          category,
          is_owner
        } = response.data;

        if (is_owner) {
          const parsedDueDate = due_date ? new Date(due_date) : null;
          setTaskData((prevTaskData) => ({
            ...prevTaskData,
            task,
            due_date: parsedDueDate,
            description,
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

  const handleChange = (event) => {
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleDateChange = (date) => {
    setTaskData((prevTaskData) => ({
      ...prevTaskData,
      due_date: date,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();
    formData.append('task', task);
    if (due_date !== null) {
      formData.append('due_date', due_date.toISOString());
    }
    formData.append('description', description);
    formData.append('priority', priority);
    formData.append('category', category);

    try {
      await axios.put(`/tasks/${id}/`, formData);
      history.push(`/tasks/`);
    } catch (error) {
      if (error.response?.status !== 401) {
        setErrors(error.response?.data);
      }
    }
  };

  const textFields = (
    <div className="text-center">
      <Form.Group>
        <Form.Label>Task</Form.Label>
        <Form.Control type="text" name="task" value={task} onChange={handleChange} />
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
        <Form.Control as="select" name="priority" value={priority} onChange={handleChange}>
          <option value="low">Low</option>
          <option value="medium">Medium</option>
          <option value="high">High</option>
        </Form.Control>
      </Form.Group>

      <Form.Group>
        <Form.Label>Category</Form.Label>
        <Form.Control as="select" name="category" value={category} onChange={handleChange}>
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
      <h3 className="text-center">Task editor</h3>
      <Row>
        <Col>
          <Container>{textFields}</Container>
        </Col>
      </Row>
    </Form>
  );
}

export default TaskEditForm;
