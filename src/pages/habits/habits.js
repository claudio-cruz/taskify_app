import React, { useState, useEffect } from 'react';
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Habit from "./Habit"
import { Link } from "react-router-dom";
import styles from "../../styles/NavBar.module.css";
import { useLocation } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button, Row, Col, Spinner, Tab, Nav } from 'react-bootstrap';

function HabitList({ filter = "" }) {
  const [habits, setHabits] = useState({ results: [], next: null });
  const currentUser = useCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchHabits = async () => {
      try {
        const { data } = await axiosReq.get(`/habits/?${filter}search=${query}`);
        setHabits(data);
        setHasLoaded(true);
      } catch (err) {
        // Handle error
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchHabits();
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
              placeholder="Search habits"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fa-solid fa-magnifying-glass" />
              </span>
            </div>
          </div>
        </Form>
      </div>

      {/* Tab to filter the Habit list */}
      <Tab.Container id="habit-filters" defaultActiveKey="all">
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
                {habits.results.length ? (
                  <InfiniteScroll
                    children={habits.results.map((habit) => (
                      <Habit key={habit.id} {...habit} setHabits={setHabits} />
                    ))}
                    dataLength={habits.results.length}
                    loader={<Spinner animation="border" variant="dark" />}
                    hasMore={!!habits.next}
                    next={() => fetchMoreData(habits, setHabits)}
                    endMessage={<p>No more habits.</p>}
                  />
                ) : (
                  <Container>
                    <p>No results</p>
                  </Container>
                )}
              </>
            ) : (
              <Container>
                <Spinner animation="border" variant="dark" text-align="center"/>
              </Container>
            )}
          </Tab.Pane>

          <Tab.Pane eventKey="high">
            {hasLoaded ? (
              <>
                {habits.results
                  .filter((habit) => habit.priority === "high")
                  .map((habit) => (
                    <Habit key={habit.id} {...habit} setHabits={setHabits} />
                  ))}
                {!habits.results.some((habit) => habit.priority === "high") && (
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
                {habits.results
                  .filter((habit) => habit.priority === "medium")
                  .map((habit) => (
                    <Habit key={habit.id} {...habit} setHabits={setHabits} />
                  ))}
                {!habits.results.some((habit) => habit.priority === "medium") && (
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
                {habits.results
                  .filter((habit) => habit.priority === "low")
                  .map((habit) => (
                    <Habit key={habit.id} {...habit} setHabits={setHabits} />
                  ))}
                {!habits.results.some((habit) => habit.priority === "low") && (
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

      {/* Add Habits button */}
      <Container>
        <Row className="justify-content-end">
          <Col xs="auto">
            <Button variant="link">
              <Link
                to="/habits/create"
                className={styles.NavLink}
                activeclassname={styles.Active}
              >
                <i className="fa-solid fa-plus"></i> Add Habit
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>

    </Container>
  );
}

export default HabitList