import React, { useState, useEffect } from 'react';
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Task from "./Task"
import { Link } from "react-router-dom";
import styles from "../../styles/NavBar.module.css";
import { useLocation } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button, Row, Col, Spinner, Tab, Nav } from 'react-bootstrap';


function TaskList({ filter = "" }) {
  const [tasks, setTasks] = useState({ results: [], next: null });
  const currentUser = useCurrentUser();
  const [hasLoaded, setHasLoaded] = useState(false);
  const { pathname } = useLocation();
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { data } = await axiosReq.get(`/tasks/?${filter}search=${query}`);
        setTasks(data);
        setHasLoaded(true);
      } catch (err) {
        // Handle error
      }
    };

    setHasLoaded(false);
    const timer = setTimeout(() => {
      fetchTasks();
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
              placeholder="Search tasks"
            />
            <div className="input-group-append">
              <span className="input-group-text">
                <i className="fa-solid fa-magnifying-glass" />
              </span>
            </div>
          </div>
        </Form>
      </div>

      {/* Tab to filter the Task list */}
      <Tab.Container id="task-filters" defaultActiveKey="all">
        <Nav variant="tabs" className="justify-content-center mb-3">
          <Nav.Item>
            <Nav.Link eventKey="all" className={styles.TabNavLink}>All</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="done" className={styles.TabNavLink}>Done</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="undone" className={styles.TabNavLink}>Undone</Nav.Link>
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
                {tasks.results.length ? (
                  <InfiniteScroll
                    children={tasks.results.map((task) => (
                      <Task key={task.id} {...task} setTasks={setTasks} />
                    ))}
                    dataLength={tasks.results.length}
                    loader={<Spinner animation="border" variant="dark" />}
                    hasMore={!!tasks.next}
                    next={() => fetchMoreData(tasks, setTasks)}
                    endMessage={<p>No more tasks.</p>}
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
          <Tab.Pane eventKey="done">
            {hasLoaded ? (
              <>
                {tasks.results
                  .filter((task) => task.completed)
                  .map((task) => (
                    <Task key={task.id} {...task} setTasks={setTasks} />
                  ))}
                {!tasks.results.some((task) => task.completed) && (
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
          <Tab.Pane eventKey="undone">
            {hasLoaded ? (
              <>
                {tasks.results
                  .filter((task) => !task.completed)
                  .map((task) => (
                    <Task key={task.id} {...task} setTasks={setTasks} />
                  ))}
                {!tasks.results.some((task) => !task.completed) && (
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
                {tasks.results
                  .filter((task) => task.priority === "high")
                  .map((task) => (
                    <Task key={task.id} {...task} setTasks={setTasks} />
                  ))}
                {!tasks.results.some((task) => task.priority === "high") && (
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
                {tasks.results
                  .filter((task) => task.priority === "medium")
                  .map((task) => (
                    <Task key={task.id} {...task} setTasks={setTasks} />
                  ))}
                {!tasks.results.some((task) => task.priority === "medium") && (
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
                {tasks.results
                  .filter((task) => task.priority === "low")
                  .map((task) => (
                    <Task key={task.id} {...task} setTasks={setTasks} />
                  ))}
                {!tasks.results.some((task) => task.priority === "low") && (
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

      {/* Add Task button */}
      <Container>
        <Row className="justify-content-end">
          <Col xs="auto">
            <Button variant="link">
              <Link
                to="/tasks/create"
                className={styles.NavLink}
                activeclassname={styles.Active}
              >
                <i className="fa-solid fa-plus"></i> Add Task
              </Link>
            </Button>
          </Col>
        </Row>
      </Container>

    </Container>
  );
}

export default TaskList;
