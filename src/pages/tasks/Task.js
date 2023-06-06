import React, { useState } from 'react'
import { Container, Row, Col, Dropdown, Form } from 'react-bootstrap';
import Styles from '../../styles/Task.module.css'
import { axiosRes } from "../../api/axiosDefaults";

const Task = (props) => {
  const {
    id,
    task,
    due_date,
    description,
    completed,
    priority,
    category,
    onUpdateComplete,
  } = props;

  const [deleted, setDeleted] = useState(false);

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/tasks/${id}/`);
      setDeleted(true);
    } catch (err) {
      // Handle error
    }
  };

  if (deleted) {
    return null;
  }

  const handleComplete = async () => {
    try {
      // Toggle the task completion status in the backend
      const updatedCompleted = !completed;
      await axiosRes.patch(`/tasks/${id}/`, { completed: updatedCompleted });

      // Call the onUpdateComplete prop to update the completion status in the parent component
      if (onUpdateComplete) {
        onUpdateComplete(id, updatedCompleted);
      }
    } catch (err) {
      // Handle error
    }
  };

  console.log(completed)

  return (
    <Container className={Styles.TaskContainer}>
      <Row>
        <Col xs={9} md={10}>
          <h5 className='font-weight-bold'>{task}</h5>
        </Col>
        <Col xs={1}>
          <Form.Check
            className="form-check checkbox-lg"
            aria-label="option 1"
            defaultChecked={completed}
            onClick={handleComplete}
          />
        </Col>
        <Col xs={1}>
          <Dropdown drop="down">
            <Dropdown.Toggle variant="primary" size="sm">
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>
                <i className="fa-solid fa-pen-to-square"></i> Edit
              </Dropdown.Item>
              <Dropdown.Item onClick={handleDelete}>
                <i className="fa-solid fa-trash-can"></i> Delete
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      {description && (
        <Row>
          <Col>
            <p>{description}</p>
          </Col>
        </Row>
      )}
      <Row>
        <Col xs={5}><p>{due_date}</p></Col>
        <Col><p>{category}</p></Col>
        <Col xs={3}><p>{priority}</p></Col>
      </Row>
    </Container>
  )
}

export default Task