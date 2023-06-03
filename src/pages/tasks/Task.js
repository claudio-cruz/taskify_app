import React from 'react'
import { Table } from 'react-bootstrap';
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
// import { useHistory } from "react-router-dom";
// import { axiosRes } from "../../api/axiosDefaults";

const Task = (props) => {
  const {
    // id,
    task,
    due_date,
    priority,
    category,
  } = props;
  

  // const currentUser = useCurrentUser();
  // const history = useHistory();
  
  /*const handleEdit = () => {
    history.push(`/tasks/${id}/edit`);
  };*/

  /*const handleDelete = async () => {
    try {
      await axiosRes.delete(`/tasks/${id}/`);
      history.goBack();
    } catch (err) {
    }
  };*/
  
    return (
      <div>
      <Table striped bordered hover>
        <tbody>
          <tr>
            <td>{task}</td>
            <td>{due_date}</td>
            <td>{category}</td>
            <td>{priority}</td>
          </tr>
        </tbody>
      </Table>
    </div>
    
  )
}

export default Task