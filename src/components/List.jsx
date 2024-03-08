import { useEffect, useState } from "react"
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
    setTimeout(() => setShowToast(false), 2900)
  }

  const handleNewTaskSubmit = (e) => {
    e.preventDefault()

    const isFormValid = newTask.title.trim() !== "" &&
    newTask.description.trim() !== "" &&
    newTask.assignee.trim() !== ""

    const taskWithId = {...newTask, id: uuidv4()}

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
      showToastMessage("Please fill out all form inputs.")
    }

  }

  
  const addTask = (newTask) => {
      setCards(prevCards => [newTask, ...prevCards])
    }
    
    

 
  // ! DOES NOT WORK 100% BECAUSE THE ORDER OF THE ARRAY CAN CHANGE
  // CAUSING THE INDEXES TO SHIFT IF CARD IS DELETED
  // CAUSING BUGS LIKE DUPLICATION AFTER EDITING A CARD TWICE AFTER DELETION OF
  // OTHER ITEMS vvv
  
  // const handleTaskChange = (id, updatedTask) => {
  //   let thisIndex;
  //   let thisCard = cards.find((card, i) => {
  //     thisIndex = i;
  //     return card.id === id;
  //   })

  //   console.log("This is the task we're updating", thisCard, thisIndex)

  //   let newCards = [...cards];
  //   newCards[thisIndex] = updatedTask;
  //   setCards(newCards);
  //   setCards(prevCards => {
  //     let newCards = [...prevCards]
  //     console.log(updatedTask)
  //     newCards[thisIndex] = updatedTask
  //     return newCards
  //   })
  //   showToastMessage("Succesfully edited task.")
  // };

  // ** SOUND APPROACH TO EDITING USING .map() vvv
  const handleTaskChange = (id, updatedTask) => {
    setCards(prevCards => {
      return prevCards.map(card => card.id === id ? updatedTask : card)
    })
    showToastMessage("Task succesfully edited.")
  }
  
  const handleDelete = (cardId) => {

    setCards(prevCards => {
      return prevCards.filter(card => card.id !== cardId)
    })
    showToastMessage("Succesfully deleted task.")
  }

  let filteredByType = cards.filter(data => {
    return data && data.status === type
  })
  
  let cardComponents = filteredByType.map(data => {
    return (
      <Card
      key={data.id}
      onDelete={handleDelete}
      handleDragStart={handleDragStart}
      handleTaskChange={handleTaskChange}
      showToastMessage={showToastMessage}
      
      {...data}
      />
      )
    })
    
  const handleDragStart = (e, cardId) => {
    e.dataTransfer.setData("text/plain", cardId)
  }

  const handleDrop = (e, targetStatus) => {
    e.preventDefault()
   
    const cardId = e.dataTransfer.getData("text/plain")
   
    setCards((prev) => prev.map((card) => card.id === cardId ? {...card, status: targetStatus}: card) )
  }
    
  const handleOnDragOver = (e) => {
    e.preventDefault()
  }

  useEffect(() => {
    console.log(cards)
  }, [cards])

  return (
    <div className="list-columns" onDrop={(e) => handleDrop(e, type)} onDragOver={(e)=> handleOnDragOver(e) }>
        <span className="title-type-box">
            <h1>{type}</h1>   
        </span>
        <div className="card-container" >
            {cardComponents}
        </div>
        <div className="new-task-container">
          <button onClick={() => setShowModal(true)}>Add Task</button>
        </div>

      <AddTask
      showModal={showModal}
      closeModal={() => setShowModal(false)}
      >

      <AddTaskForm
      newTask={newTask}
      setNewTask={setNewTask}
      status={newTask.status}
      handleNewTaskSubmit={(e) => handleNewTaskSubmit(e)}
      closeModal={() => setShowModal(false)}
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