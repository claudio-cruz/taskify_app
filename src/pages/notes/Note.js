import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, Modal, Button } from 'react-bootstrap';
import Styles from '../../styles/Note.module.css';
import { axiosRes } from "../../api/axiosDefaults";
import { useHistory } from "react-router-dom";

function Note(props) {
    const {
        id,
        title,
        content,
        created_at,
        priority,
        category,
        //onUpdateComplete,
    } = props;

    const [deleted, setDeleted] = useState(false);
    const history = useHistory();
    const [showModal, setShowModal] = useState(false);

    const handleEdit = () => {
        history.push(`/notes/${id}/edit`);
    };

    const handleDelete = async () => {
        setShowModal(true);
    };

    const confirmDelete = async () => {
        try {
            await axiosRes.delete(`/notes/${id}/`);
            setDeleted(true);
        } catch (err) {
            // Handle error
        }
    };

    if (deleted) {
        return null;
    }

    return (
        <Container className={Styles.NoteContainer}>

            <Row>
                <Col xs={10} md={11}>
                    <h5 className='font-weight-bold'>{title}</h5>
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
            {content && (
                <Row>
                    <Col>
                        <p>{content}</p>
                    </Col>
                </Row>
            )}
            <Row>
                <Col xs={5}><p>{created_at}</p></Col>
                <Col><p>{category}</p></Col>
                <Col xs={3}><p>{priority}</p></Col>
            </Row>

            {/* Modal Confirmation */}
            <Modal show={showModal} onHide={() => setShowModal(false)}>
                <Modal.Header closeButton>
                    <Modal.Title>Confirm Delete</Modal.Title>
                </Modal.Header>
                <Modal.Body>Are you sure you want to delete this note?</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => setShowModal(false)}>
                        Cancel
                    </Button>
                    <Button variant="danger" onClick={confirmDelete}>
                        Delete
                    </Button>
                </Modal.Footer>
            </Modal>
        </Container >
    )
}

export default Note