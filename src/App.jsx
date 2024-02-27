import './App.css'
import Navbar from "./components/Navbar.jsx"
import Sidebar from "./components/Sidebar.jsx"
import Footer from "./components/Footer.jsx"

function App() {
  return (
    <>
      <section className="page-content">
        <Navbar/>
        <Sidebar/>
        <Footer/>
      </section>
    </>
  )
}

export default App
