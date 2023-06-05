import React, { useState, useEffect } from 'react';
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Task from "./Task"
import { NavLink } from "react-router-dom";
import styles from "../../styles/NavBar.module.css";
import { useLocation } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Button, Table, Row, Col, Spinner  } from 'react-bootstrap';


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


      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th className="w-25 p-2">Task</th>
              <th className="w-25 p-2">Date</th>
              <th className="w-25 p-2">Category</th>
              <th className="w-25 p-2">Priority</th>
            </tr>
          </thead>
        </Table>
      </div>

      {hasLoaded ? (
        <>
          {tasks.results.length ? (
            <InfiniteScroll
              children={tasks.results.map((task) => (
                <Task key={task.id} {...task} setTasks={setTasks} />
              ))}
              dataLength={tasks.results.length}
              loader={<Spinner animation="border" variant="dark"/>}
              hasMore={!!tasks.next}
              next={() => fetchMoreData(tasks, setTasks)}
              endMessage={<p>No more tasks.</p>}
            />
          ) : (
            // if no results
            <Container >
              <p>No results</p>
            </Container>
          )}
        </>
      ) : (
        // loding data
        <Container>
          <Spinner animation="border" variant="dark" text-align="center" />
        </Container>
      )}

      <Container>
        <Row className="justify-content-end">
          <Col xs="auto">
            <Button variant="link">

              <NavLink
                to="/tasks/create"
                className={styles.NavLink}
                activeClassName={styles.Active}
              >
                <i className="fa-solid fa-plus"></i> Add Task
              </NavLink>
            </Button>
          </Col>
        </Row>
      </Container>

    </Container>
  );
}

export default TaskList;
