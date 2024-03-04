import { useState } from "react"
import EditTask from "./EditTask"
import EditTaskForm from "./EditTaskForm"

const Card = (props) => {

  const [showModal, setShowModal] = useState(false)
  const [thisTask, setThisTask] = useState({...props})
  const [status, setStatus] = useState(props.status)
  const [priority, setPriority] = useState(props.priority)

  const handleSubmit = () => {
    props.handleTaskChange(props.id, thisTask)
    setShowModal(false)
  }

  // console.log("This is the task", thisTask)

  const styles = {
    color: props.priority === "High" ? "crimson" : props.priority === "Medium" ? "darkorange" : props.priority === "Low" ? "green" : "",
    fontWeight: "bold"
  }


  return (
    <div className="card-wrapper">

      <h1>{props.title}</h1>
      <p><span className="bold">Description: </span>{props.description}</p>
      <span>
        <p><span className="bold">Asignee: </span> {props.assignee}</p>
      </span>
      <p><span className="bold">Status:</span> {props.status}</p>
      <p><span className="bold">Priority:</span> <span style={styles}>{props.priority}</span></p>
      <p><span className="bold">Created:</span> {props.createdDate}</p>
      <p><span className="bold">Due:</span> {props.dueDate}</p>
      <div className="button-container">
        <button onClick={() => setShowModal(true)}>Edit</button>
        <button onClick={() => props.onDelete(props.id)}>Delete</button>

      </div>

      <EditTask
      buttonAction={"Update Task"}
      showModal={showModal}
      closeModal={() => setShowModal(false)}
      handleSubmit={() => handleSubmit()}
      >

        <EditTaskForm
        thisTask={thisTask}
        setThisTask={setThisTask}
        status={status}
        priority={priority}
        />

      </EditTask>

    </div>
  )
}

export default Card

// buttonAction, children, closeModal, handleSubmit, showModal 


// buttonAction={"Update Task"}
// showModal={showModal}
// handleSubmit={handleTaskChange}
// closeModal={() => {
// setShowModal(false);
// }}>


// "id": "1",
// "title": "Design Landing Page",
// "description": "Create a visually appealing landing page for the website.",
// "assignee": "Mary Davis",
// "status": "To Do",
// "priority": "High",
// "createdDate": "2023-09-15",
// "dueDate": "2023-09-30"