import Card from "./Card.jsx"

import { useState } from "react"

const List = ({type, cards, setCards}) => {

  // const [newTask, setNewTask] = useState({
  //   id: "",
  //   title: "",
  //   "description": "Investigate and fix the login problem reported by users.",
  //   "assignee": "Mark Johnson",
  //   "status": "In Progress",
  //   "priority": "High",
  //   "createdDate": "2023-09-17",
  //   "dueDate": "2023-09-25"
  // })

  // const handleTextChange = (e) => {
  //   setNewTask((prev) => ({...prev, ["id"]: randomIdGenerator()}))
  //   setNewTask((prev) => ({...prev, [e.target.name]: e.target.value})) 
  // }

  const handleTaskChange = (id, updatedTask) => {
    let thisIndex;
    let thisCard = cards.find((card, i) => {
      thisIndex = i;
      return card.id === id;
    })

    console.log("This is the task we're updating", thisCard, thisIndex)

    let newCards = [...cards];
    newCards[thisIndex] = updatedTask;
    setCards(newCards);

  };

  // const addTask = (newTask) => {
  //   let newTasks = [newTask, ...cards]
  //   setCards(newTasks)
  // }

  
  let filteredByType = cards.filter(data => {
    return data.status === type
  })

  const handleDelete = (cardId) => {
    let filteredCards = cards.filter(card => {
      return card.id !== cardId
    })
    setCards(filteredCards)
  }

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
          <button>Add New Task</button>
        </div>
    </div>
  )
}



export default List