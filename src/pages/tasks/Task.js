import React from 'react'
import { useCurrentUser } from "../../contexts/CurrentUserContext";
import { useHistory } from "react-router-dom";
import { axiosRes } from "../../api/axiosDefaults";

const Task = (props) => {
  const {
    id,
    task,
    due_date,
    priority,
    category,
  } = props;

  const currentUser = useCurrentUser();
  const history = useHistory();
  
  const handleEdit = () => {
    history.push(`/tasks/${id}/edit`);
  };

  const handleDelete = async () => {
    try {
      await axiosRes.delete(`/tasks/${id}/`);
      history.goBack();
    } catch (err) {
    }
  };
  
    return (
    <div>
      <ul>
        <li>{task} {due_date} {category} {priority}</li>
      </ul>
    </div>
    
  )
}

export default Task