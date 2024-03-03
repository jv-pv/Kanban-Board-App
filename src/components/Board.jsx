import List from "./List.jsx"

import { useState } from "react"

import kanbanData from "../data.json"

const Board = () => {

  const [cards, setCards] = useState(kanbanData)
  
  return (
    <section className="board-container">
        {/* <List type="To Do"  kanbanData={kanbanData}/>
        <List type="In Progress"  kanbanData={kanbanData}/>
        <List type="Done"  kanbanData={kanbanData}/> */}

        <List type="To Do" cards={cards} setCards={setCards}/>
        <List type="In Progress" cards={cards} setCards={setCards}/>
        <List type="Done" cards={cards} setCards={setCards}/>
    </section>
  )
}

export default Board