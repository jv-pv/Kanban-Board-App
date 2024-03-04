import { useId } from "react"

const AddTaskForm = ({ newTask, setNewTask, status }) => {

  const id = useId()

  const handleTextChange = (e) => {
    const {name, value} = e.target
      setNewTask(prevTask => {
        return {
          ...prevTask,
          [name]: value
      }
    })
  }
 

  return (
    
  <div className="add-task">

    <label htmlFor={id + "-name"}>Name:</label>
      <input type="text" name="title" id={id + "-name"} onChange={handleTextChange} value={newTask.title} required/>

    <label htmlFor={id + "-description"}>Description:</label>
      <input type="text" name="description" id={id + "-description"} onChange={handleTextChange} value={newTask.description} required/>

    <label htmlFor={id + "-assignee"}>Assignee:</label>
      <input type="text" name="assignee" id={id + "-assignee"} onChange={handleTextChange} value={newTask.assignee} required/>

    <label htmlFor={id + "-status"}>Status:</label>
    <select name="status" id={id + "-status"} onChange={handleTextChange} required>
      <option value={status}>Current: {status}</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>

    <label htmlFor={id + "-priority"}>Priority:</label>
    <select name="priority" id={id + "-priority"} onChange={handleTextChange} required>
      <option value="">--Choose Priority--</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>

    <label htmlFor={id + "-created"}>Created:</label>
      <input type="date" name="createdDate" id={id + "-created"} onChange={handleTextChange} value={newTask.createdDate} required/>

    <label htmlFor={id + "-due"}>Due:</label>
    <input type="date" name="dueDate" id={id + "-due"} onChange={handleTextChange} value={newTask.dueDate} required/>

  </div>

  )
}

export default AddTaskForm