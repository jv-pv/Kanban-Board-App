import Card from "./Card.jsx"

function List(props) {

  return (
    <div className="list-columns">
        <span className="title-type-box">
            <h1>{props.type}</h1>   
        </span>
        <div className="card-container">
            <Card/>
        </div>
    </div>
  )
}

export default List