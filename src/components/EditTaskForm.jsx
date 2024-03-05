import { useId } from "react"


const EditTaskForm = ({thisTask, setThisTask, closeModal, handleEditSubmit}) => {

  const id = useId()

  const handleTextChange = (e) => {
    const {name, value} = e.target
      setThisTask(prevTask => {
        return {
          ...prevTask,
          [name]: value
      }
    })
  }
 

  return (

    <form onSubmit={handleEditSubmit}>

    <div className="edit-task">

        <label htmlFor={id + "-name"}>Name:</label>
          <input type="text" name="title" id={id + "-name"} onChange={handleTextChange} value={thisTask.title} required/>

        <label htmlFor={id + "-description"}>Description:</label>
          <input type="text" name="description" id={id + "-description"} onChange={handleTextChange} value={thisTask.description} required/>

        <label htmlFor={id + "-assignee"}>Assignee:</label>
          <input type="text" name="assignee" id={id + "-assignee"} onChange={handleTextChange} value={thisTask.assignee} required/>

        <label htmlFor={id + "-status"}>Status:</label>
        <select name="status" id={id + "-status"} onChange={handleTextChange} required>
          <option value={thisTask.status}>Current: {thisTask.status}</option>
          <option value="To Do">To Do</option>
          <option value="In Progress">In Progress</option>
          <option value="Done">Done</option>
        </select>

        <label htmlFor={id + "-priority"}>Priority:</label>
        <select name="priority" id={id + "-priority"} onChange={handleTextChange} required>
          <option value={thisTask.priority}>Current: {thisTask.priority}</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <label htmlFor={id + "-created"}>Created:</label>
          <input type="date" name="createdDate" id={id + "-created"} onChange={handleTextChange} value={thisTask.createdDate} required/>

        <label htmlFor={id + "-due"}>Due:</label>
        <input type="date" name="dueDate" id={id + "-due"} onChange={handleTextChange} value={thisTask.dueDate} required/>

    </div>
    <div className="modal-buttons">
       <button onClick={closeModal}>Cancel</button>
       <button type="submit">Edit Task</button>  
    </div>

    </form>
  )
}

export default EditTaskForm