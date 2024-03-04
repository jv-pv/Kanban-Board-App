import { useId } from "react"


const EditTaskForm = ({thisTask, setThisTask, status, priority }) => {

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
    <div className="edit-task">

    <label htmlFor={id + "-name"}>Name:</label>
      <input type="text" name="title" id={id + "-name"} onChange={handleTextChange} value={thisTask.title} />

    <label htmlFor={id + "-description"}>Description:</label>
      <input type="text" name="description" id={id + "-description"} onChange={handleTextChange} value={thisTask.description}/>

    <label htmlFor={id + "-assignee"}>Assignee:</label>
      <input type="text" name="assignee" id={id + "-assignee"} onChange={handleTextChange} value={thisTask.assignee}/>

    <label htmlFor={id + "-status"}>Status:</label>
    <select name="status" id={id + "-status"} onChange={handleTextChange}>
      <option value={status}>Current: {status}</option>
      <option value="To Do">To Do</option>
      <option value="In Progress">In Progress</option>
      <option value="Done">Done</option>
    </select>

    <label htmlFor={id + "-priority"}>Priority:</label>
    <select name="priority" id={id + "-priority"} onChange={handleTextChange}>
      <option value={priority}>Current: {priority}</option>
      <option value="Low">Low</option>
      <option value="Medium">Medium</option>
      <option value="High">High</option>
    </select>

    <label htmlFor={id + "-created"}>Created:</label>
      <input type="date" name="createdDate" id={id + "-created"} onChange={handleTextChange} value={thisTask.createdDate}/>

    <label htmlFor={id + "-due"}>Due:</label>
    <input type="date" name="dueDate" id={id + "-due"} onChange={handleTextChange} value={thisTask.dueDate}/>

</div>
  )
}

export default EditTaskForm