import './App.css'
import Navbar from "./components/Navbar.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Board from "./components/Board.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      <section className="page-content">
        <Navbar/>
        <div className="main-content-container">
          <Sidebar/>
          <Board/>
        </div>
        <Footer/>
      </section>
    </>
  )
}

export default App
