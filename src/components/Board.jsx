import List from "./List.jsx"
import kanbanData from "../data.json"

function Board() {
    console.log(kanbanData)
  return (
    <section className="board-container">
        <List type="To Do"/>
        <List type="In Progress"/>
        <List type="Done"/>
    </section>
  )
}

export default Board