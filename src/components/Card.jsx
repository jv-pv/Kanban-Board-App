import { useState } from "react"
import EditTask from "./EditTask"
import EditTaskForm from "./EditTaskForm"

const Card = (props) => {

  const [showModal, setShowModal] = useState(false)
  const [thisTask, setThisTask] = useState({...props})

  const handleEditSubmit = (e) => {
    e.preventDefault()

    let formIsValid = thisTask.title.trim() !== "" &&
    thisTask.description.trim() !== "" && 
    thisTask.assignee.trim() !== ""

    if (formIsValid) {
      props.handleTaskChange(props.id, thisTask)
      setShowModal(false)
    } else {
      props.showToastMessage("Please fill out all form inputs.")
    }
  }

  const styles = {
    color: props.priority === "High" ? "crimson" : props.priority === "Medium" ? "darkorange" : props.priority === "Low" ? "green" : "",
    fontWeight: "bold"
  }

  return (
    <div  draggable  onDragStart={(e) => props.handleDragStart(e, props.id)} className="card-wrapper">

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
      showModal={showModal}
      closeModal={() => setShowModal(false)}
      >

        <EditTaskForm
        thisTask={thisTask}
        setThisTask={setThisTask}
        handleEditSubmit={(e) => handleEditSubmit(e)}
        closeModal={() => setShowModal(false)}
        />

      </EditTask>

    </div>
  )
}

export default Card