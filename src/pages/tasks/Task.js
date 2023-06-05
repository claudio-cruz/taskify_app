import React from 'react'
import { Table, Dropdown } from 'react-bootstrap';
// import { useCurrentUser } from "../../contexts/CurrentUserContext";
// import { useHistory } from "react-router-dom";
// import { axiosRes } from "../../api/axiosDefaults";

const Task = (props) => {
  const {
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
            <td className="text-end d-flex justify-content-end">
            <Dropdown drop="down">
                <Dropdown.Toggle variant="primary" size="sm">
                </Dropdown.Toggle>
                <Dropdown.Menu>
                <Dropdown.Item>
                <i className="fa-solid fa-check fa-lg"></i> Done
                </Dropdown.Item>
                  <Dropdown.Item>
                  <i className="fa-solid fa-pen-to-square"></i> Edit
                  </Dropdown.Item>
                  <Dropdown.Item>
                  <i className="fa-solid fa-trash-can"></i> Delete
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
    
  )
}

export default Task