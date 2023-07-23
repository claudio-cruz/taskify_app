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

function NoteCreateForm() {
  const [errors, setErrors] = useState({});
  const [noteCreateAlert, setNoteCreateAlert] = useState(false);

  const [noteData, setNoteData] = useState({
    title: "",
    content: "",
    created_at: "",
    priority: "low",
    category: "other",
  });
  const { title, content, created_at, priority, category } = noteData;

  const history = useHistory();

  const handleChange = (event) => {
    setNoteData({
      ...noteData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData();

    formData.append("title", title);
    formData.append("content", content);
    formData.append("created_at", created_at);
    formData.append("priority", priority);
    formData.append("category", category);

    try {
      const currentTime = new Date();
      // Update the noteData state based on input field changes
      setNoteData({
        ...noteData,
        created_at: currentTime,
      });

      await axiosReq.post("/notes/", formData);
      setNoteCreateAlert(true);
      setTimeout(() => {
        setNoteCreateAlert(false);
        history.push(`/notes/`);
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
        <Form.Label>Content</Form.Label>
        <Form.Control
          as="textarea"
          rows={5}
          name="content"
          value={content}
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
      <h3 className="text-center">Create a note</h3>
      {/* Display the alert message if success is true */}
      {noteCreateAlert && (
        <Alert
          className={StyleAlerts.AlertMessage}
          variant="success"
          onClose={() => setNoteCreateAlert(false)} dismissible>
          New note created successfully!
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

export default NoteCreateForm