import React, { useState, useEffect } from 'react';
import { fetchMoreData } from "../../utils/utils";
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { axiosReq } from "../../api/axiosDefaults";
import Task from "./Task"
import { useLocation } from "react-router";
import InfiniteScroll from "react-infinite-scroll-component";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import { Table } from 'react-bootstrap';


function TaskList({ filter = "" }) {
  const [tasks, setTasks] = useState({ results: [] });
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
              <th className="w-25 p-2">Due-Date</th>
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
              loader={"Loding..."}
              hasMore={!!tasks.next}
              next={() => fetchMoreData(tasks, setTasks)}
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
        <Container >
          <p>Loading...</p>
        </Container>
      )}

    </Container>
  );
}

export default TaskList;
