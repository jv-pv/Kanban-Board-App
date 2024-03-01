import Card from "./Card.jsx"
import { useState } from "react"

const List = ({type, kanbanData}) => {

  const [cards, setCards] = useState(kanbanData)

  let filteredByType = cards.filter(data => {
    return data.status === type
  })

  const handleDelete = (cardId) => {
    let filteredCards = filteredByType.filter(card => {
      return card.id !== cardId
    })
    setCards(filteredCards)
  }

  let cardComponents = filteredByType.map(data => {
    return (
        <Card
        key={data.id}
        onDelete={handleDelete}
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
    </div>
  )
}



export default List