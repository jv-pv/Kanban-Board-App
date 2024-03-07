import Sidebar from "../components/Sidebar"
import { Instagram, Github, Twitter, Linkedin, Mail } from "iconoir-react";

const AboutPage = () => {
    
  return (
    <div className="main-content-container">
      <Sidebar/>
      {/* <div className="about-container">
        <div className="card">
            <img className="avatar" src="src/assets/mypic.jpg"/>
            <div className="text" >
                <h3>John Pieri Varela</h3>
                <p>Full-Stack Developer</p>
                <p>Puerto Rico</p>
            </div>
        </div>
      </div> */}
      <div className="container">

      <section className="about-card-wrapper">

        <img
            src="src/assets/mypic.jpg"
            className="cover-image"
        ></img>

        <div className="info-inner-container">


            <article className="card-info">

                <h1>John V. Pieri</h1>
                <h2>Front End Developer</h2>
                <a href="https://www.pieriphoto.app" target="_blank">pieriphoto.app</a>
                <div className="email">
                    <Mail className="mail-icon"/>
                    <a href="mailto:jvpieri@gmail.com" className="email">
                    Email Me!
                    </a>
                </div>

            </article>


            <h4>About</h4>
            <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
                quisquam at iusto voluptate doloribus explicabo minima, corporis, neque
                esse ducimus ut tenetur fuga. Aliquam blanditiis quisquam quos in
                cupiditate. Voluptate!
            </p>


            <h4>Interest</h4>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates
                quisquam at iusto voluptate doloribus explicabo minima, corporis, neque
                esse ducimus ut tenetur fuga. </p>

            </div>


          <div className="icon-wrapper">
            <Instagram color="gray" />
            <Github color="gray"/>
            <Twitter color="gray"/>
            <Linkedin color="gray"/>
          </div>
      </section>

      </div>
    </div>
  )
}

export default AboutPage