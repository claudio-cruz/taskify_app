import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Form, Modal, Button, Alert } from 'react-bootstrap';
import Styles from '../../styles/Task.module.css';
import StyleAlerts from '../../styles/Alers.module.css'
import { axiosRes } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom";

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
  const history = useHistory();
  const [showModal, setShowModal] = useState(false);
  const [taskCompleteAlert, setTaskCompleteAlert] = useState(false);
  const [taskDeleteAlert, setTaskDeleteAlert] = useState(false);

  const handleEdit = () => {
    history.push(`/tasks/${id}/edit`);
  };

  const handleDelete = async () => {
    setShowModal(true);
  };

  const confirmDelete = async () => {
    try {
      await axiosRes.delete(`/tasks/${id}/`);
      setDeleted(true);
      setTaskDeleteAlert(true); // Display success alert
      setTimeout(() => {
        setTaskDeleteAlert(false); // Reset success status after some time
        history.push(`/tasks/`);
      }, 2000);
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

      setTaskCompleteAlert(true); // Display success alert
      setTimeout(() => {
        setTaskCompleteAlert(false); // Reset success status after some time
        history.push(`/tasks/`);
      }, 2000);
    } catch (err) {
      // Handle error
    }
  };

  return (
    <Container className={Styles.TaskContainer}>
      {/* Alerts */}
      <Alert
        className={StyleAlerts.AlertMessage}
        variant="success"
        show={taskCompleteAlert}
        onClose={() => setTaskCompleteAlert(false)}
        dismissible
      >
        Task toggled!
      </Alert>

      <Alert
        className={StyleAlerts.AlertMessage}
        variant="success"
        show={taskDeleteAlert}
        onClose={() => setTaskDeleteAlert(false)}
        dismissible
      >
        Task deleted successfully!
      </Alert>


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
              <Dropdown.Item onClick={handleEdit}>
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

      {/* Modal Confirmation */}
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default Task;
