import React, { useState, useEffect } from 'react';
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Event from "./Event"
import { Link } from "react-router-dom";
import styles from "../../styles/NavBar.module.css";
import { useLocation } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button, Row, Col, Spinner, Tab, Nav } from 'react-bootstrap';

function EventList({ filter = "" }) {
  const [events, setEvents] = useState({ results: [], next: null });
  const currentUser = useCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const { data } = await axiosReq.get(`/events/?${filter}search=${query}`);
        setEvents(data);
        setHasLoaded(true);
      } catch (err) {
        // Handle error
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchEvents();
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
              placeholder="Search events"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fa-solid fa-magnifying-glass" />
              </span>
            </div>
          </div>
        </Form>
      </div>

      {/* Tab to filter the Event list */}
      <Tab.Container id="event-filters" defaultActiveKey="all">
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
                {events.results.length ? (
                  <InfiniteScroll
                    children={events.results.map((event) => (
                      <Event key={event.id} {...event} setEvents={setEvents} />
                    ))}
                    dataLength={events.results.length}
                    loader={<Spinner animation="border" variant="dark" />}
                    hasMore={!!events.next}
                    next={() => fetchMoreData(events, setEvents)}
                    endMessage={<p>No more events.</p>}
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
                {events.results
                  .filter((event) => event.priority === "high")
                  .map((event) => (
                    <Event key={event.id} {...event} setEvents={setEvents} />
                  ))}
                {!events.results.some((event) => event.priority === "high") && (
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
                {events.results
                  .filter((event) => event.priority === "medium")
                  .map((event) => (
                    <Event key={event.id} {...event} setEvents={setEvents} />
                  ))}
                {!events.results.some((event) => event.priority === "medium") && (
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
                {events.results
                  .filter((event) => event.priority === "low")
                  .map((event) => (
                    <Event key={event.id} {...event} setEvents={setEvents} />
                  ))}
                {!events.results.some((event) => event.priority === "low") && (
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

      {/* Add Event button */}
      <Container>
        <Row className="justify-content-end">
          <Col xs="auto">
            <Button variant="link">
              <Link
                to="/events/create"
                className={styles.NavLink}
                activeclassname={styles.Active}
              >
                <i className="fa-solid fa-plus"></i> Add Event
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>

    </Container>
  )
}

export default EventList