import Sidebar from "../components/Sidebar"

const AboutPage = () => {
    
  return (
    <div className="main-content-container">
      <Sidebar/>
      <div className="about-container">
      <div className="card">
            <img className="avatar" src="src/assets/mypic.jpg"/>
            <div className="text" >
                <h3>John Pieri Varela</h3>
                <p>Full-Stack Developer</p>
                <p>Puerto Rico</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutPage