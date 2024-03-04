import { useState } from "react"
import {v4 as uuidv4} from "uuid"

import Card from "./Card.jsx"
import AddTaskForm from "./AddTaskForm.jsx"
import AddTask from "./AddTask.jsx"
import Toast from "./Toast.jsx"

const List = ({type, cards, setCards}) => {


  const [showModal, setShowModal] = useState(false)
  const [showToast, setShowToast] = useState(false)
  const [toastMessage, setToastMessage] = useState("")
  const [newTask, setNewTask] = useState({
    id: "",
    title: "",
    description: "",
    assignee: "",
    status: type,
    priority: "",
    createdDate: "",
    dueDate: ""
  })

  const showToastMessage = (message) => {
    setShowToast(true)
    setToastMessage(message)
    setTimeout(() => setShowToast(false), 1000)
  }

  const handleNewTaskSubmit = () => {

    const isFormValid = newTask.title.trim() !== "" &&
    newTask.description.trim() !== "" &&
    newTask.assignee.trim() !== ""
    

    let taskWithId = {id: uuidv4(), ...newTask}

    console.log(taskWithId)

    if (isFormValid) {

      addTask(taskWithId)
  
      setNewTask({    
        id: "",
        title: "",
        description: "",
        assignee: "",
        status: type,
        priority: "",
        createdDate: "",
        dueDate: ""
      })
  
      setShowModal(false)
      showToastMessage("Successfully add new task.")

    } else {
      showToastMessage("Please fill out all inputs")
    }

  }

  
  const addTask = (newTask) => {
      let newTasks = [newTask, ...cards]
      setCards(newTasks)
    }
    
    
  const handleTaskChange = (id, updatedTask) => {
    let thisIndex;
    let thisCard = cards.find((card, i) => {
      thisIndex = i;
      return card.id === id;
    })

    // console.log("This is the task we're updating", thisCard, thisIndex)

    let newCards = [...cards];
    newCards[thisIndex] = updatedTask;
    setCards(newCards);
    showToastMessage("Succesfully edited task.")
  };
  
  const handleDelete = (cardId) => {
    let filteredCards = cards.filter(card => {
      return card.id !== cardId
    })
    setCards(filteredCards)
    showToastMessage("Succesfully deleted task.")
  }

  let filteredByType = cards.filter(data => {
    return data.status === type
  })

  let cardComponents = filteredByType.map(data => {
    return (
        <Card
        key={data.id}
        onDelete={handleDelete}
        handleTaskChange={handleTaskChange}
        {...data}
        />
    )
  })


  return (
    <div className="list-columns">
        <span className="title-type-box">
            <h1>{type}</h1>   
        </span>
        <div className="card-container">
            {cardComponents}
        </div>
        <div className="new-task-container">
          <button onClick={() => setShowModal(true)}>Add Task</button>
        </div>

      <AddTask
      buttonAction={"Add Task"}
      showModal={showModal}
      closeModal={() => setShowModal(false)}
      handleSubmit={() => handleNewTaskSubmit()}
      >

      <AddTaskForm
      newTask={newTask}
      setNewTask={setNewTask}
      status={newTask.status}
      />

      </AddTask>

      <Toast
      showToast={showToast}
      toastMessage={toastMessage}
      />

    </div>
  )
}



export default List