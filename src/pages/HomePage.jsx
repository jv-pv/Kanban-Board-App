import Sidebar from "../components/Sidebar"
import { Link } from "react-router-dom";

const HomePage = () => {

  return (
    <div className="main-content-container">
        <Sidebar/>
        <div className="home-content-container">
            <h1>Welcome to React Kanban!</h1>

          <div className="current-boards-wrapper">
            <h2>Current Boards:</h2>
                <div className="boards-card">
                    <h3>Board 1</h3>
                    <Link to="/board" className="board-card-link">View Board</Link>
                </div>
          </div>

        </div>

    </div>
  )
}

export default HomePage