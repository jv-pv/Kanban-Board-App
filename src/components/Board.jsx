import List from "./List.jsx"
import kanbanData from "../data.json"

const Board = () => {

  return (
    <section className="board-container">
        <List type="To Do"  kanbanData={kanbanData}/>
        <List type="In Progress"  kanbanData={kanbanData}/>
        <List type="Done"  kanbanData={kanbanData}/>
    </section>
  )
}

export default Board