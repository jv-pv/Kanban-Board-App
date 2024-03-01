import { NavLink } from "react-router-dom";

const Sidebar = () => {



  return (
  <aside className="sidebar-container">
    <ul>
      <li><NavLink to="/" >Home</NavLink></li>
      <li><NavLink to="/board" >Board</NavLink></li>
      <li><NavLink to="/about" >About</NavLink></li>
    </ul>
  </aside>
  )
}

export default Sidebar