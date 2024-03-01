import './App.css'
import Header from "./components/Header.jsx"
import Footer from "./components/Footer.jsx"
import DashBoardPage from './pages/DashBoardPage.jsx'
import HomePage from './pages/HomePage.jsx'
import AboutPage from './pages/AboutPage.jsx'
import ErrorPage from './pages/ErrorPage.jsx'

import { Routes, Route } from "react-router-dom";

const App = () => {
  return (
      <section className="page-content">
        <Header/>
        <Routes>

          <Route path="/" element={<HomePage/>} />
          <Route path="/board" element={<DashBoardPage/>} />
          <Route path="/about" element={<AboutPage/>} />

          <Route path='*' element={<ErrorPage/>}/>

        </Routes>
        <Footer/>
      </section>
  )
}

export default App
