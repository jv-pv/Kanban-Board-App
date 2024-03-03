import { NavLink } from "react-router-dom";

const Sidebar = () => {

  return (
  <aside className="sidebar-container">
    <ul>

      <li><NavLink to="/" className={({isActive}) => isActive ? "selected" : ""} >Home</NavLink></li>
      <li><NavLink to="/board" className={({isActive}) => isActive ? "selected" : ""}>Board</NavLink></li>
      <li><NavLink to="/about" className={({isActive}) => isActive ? "selected" : ""}>About</NavLink></li>
      
    </ul>
  </aside>
  )
}

export default Sidebar