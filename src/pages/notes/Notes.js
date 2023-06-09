import React, { useState, useEffect } from 'react';
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Note from "./Note"
import { Link } from "react-router-dom";
import styles from "../../styles/NavBar.module.css";
import { useLocation } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button, Row, Col, Spinner, Tab, Nav } from 'react-bootstrap';

function NoteList({ filter = "" }) {
    const [notes, setNotes] = useState({ results: [], next: null });
    const currentUser = useCurrentUser();
    const [hasLoaded, setHasLoaded] = useState(false);
    const { pathname } = useLocation();
    const [query, setQuery] = useState("");

    useEffect(() => {
        const fetchNotes = async () => {
            try {
                const { data } = await axiosReq.get(`/notes/?${filter}search=${query}`);
                setNotes(data);
                setHasLoaded(true);
            } catch (err) {
                // Handle error
            }
        };

        setHasLoaded(false);
        const timer = setTimeout(() => {
            fetchNotes();
        }, 1000);

        return () => {
            clearTimeout(timer);
        };
    }, [filter, query, pathname, currentUser]);

    return (
        <Container>
            {/* Search bar */}
            <div className="d-flex justify-content-center p-3">
                <Form onSubmit={(event) => event.preventDefault()}>
                    <div className="input-group">
                        <Form.Control
                            value={query}
                            onChange={(event) => setQuery(event.target.value)}
                            type="text"
                            placeholder="Search notes"
                        />
                        <div className="input-group-append">
                            <span className="input-group-text">
                                <i className="fa-solid fa-magnifying-glass" />
                            </span>
                        </div>
                    </div>
                </Form>
            </div>

            {/* Tab to filter the Note list */}
            <Tab.Container id="note-filters" defaultActiveKey="all">
                <Nav variant="tabs" className="justify-content-center mb-3">
                    <Nav.Item>
                        <Nav.Link eventKey="all" className={styles.TabNavLink}>All</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="high" className={styles.TabNavLink}>High</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="medium" className={styles.TabNavLink}>Medium</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="low" className={styles.TabNavLink}>Low</Nav.Link>
                    </Nav.Item>
                </Nav>
                <Tab.Content>
                    <Tab.Pane eventKey="all">
                        {hasLoaded ? (
                            <>
                                {notes.results.length ? (
                                    <InfiniteScroll
                                        children={notes.results.map((note) => (
                                            <Note key={note.id} {...note} setNotes={setNotes} />
                                        ))}
                                        dataLength={notes.results.length}
                                        loader={<Spinner animation="border" variant="dark" />}
                                        hasMore={!!notes.next}
                                        next={() => fetchMoreData(notes, setNotes)}
                                        endMessage={<p>No more notes.</p>}
                                    />
                                ) : (
                                    <Container>
                                        <p>No results</p>
                                    </Container>
                                )}
                            </>
                        ) : (
                            <Container>
                                <Spinner animation="border" variant="dark" text-align="center" />
                            </Container>
                        )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="high">
                        {hasLoaded ? (
                            <>
                                {notes.results
                                    .filter((note) => note.priority === "high")
                                    .map((note) => (
                                        <Note key={note.id} {...note} setNotes={setNotes} />
                                    ))}
                                {!notes.results.some((note) => note.priority === "high") && (
                                    <Container>
                                        <p>No results</p>
                                    </Container>
                                )}
                            </>
                        ) : (
                            <Container>
                                <Spinner animation="border" variant="dark" text-align="center" />
                            </Container>
                        )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="medium">
                        {hasLoaded ? (
                            <>
                                {notes.results
                                    .filter((note) => note.priority === "medium")
                                    .map((note) => (
                                        <Note key={note.id} {...note} setNotes={setNotes} />
                                    ))}
                                {!notes.results.some((note) => note.priority === "medium") && (
                                    <Container>
                                        <p>No results</p>
                                    </Container>
                                )}
                            </>
                        ) : (
                            <Container>
                                <Spinner animation="border" variant="dark" text-align="center" />
                            </Container>
                        )}
                    </Tab.Pane>
                    <Tab.Pane eventKey="low">
                        {hasLoaded ? (
                            <>
                                {notes.results
                                    .filter((note) => note.priority === "low")
                                    .map((note) => (
                                        <Note key={note.id} {...note} setNotes={setNotes} />
                                    ))}
                                {!notes.results.some((note) => note.priority === "low") && (
                                    <Container>
                                        <p>No results</p>
                                    </Container>
                                )}
                            </>
                        ) : (
                            <Container>
                                <Spinner animation="border" variant="dark" text-align="center" />
                            </Container>
                        )}
                    </Tab.Pane>
                </Tab.Content>
            </Tab.Container>

            {/* Add Note button */}
            <Container>
                <Row className="justify-content-end">
                    <Col xs="auto">
                        <Button variant="link">
                            <Link
                                to="/notes/create"
                                className={styles.NavLink}
                                activeclassname={styles.Active}
                            >
                                <i className="fa-solid fa-plus"></i> Add Note
                            </Link>
                        </Button>
                    </Col>
                </Row>
            </Container>
            
        </Container>

    )
}

export default NoteList