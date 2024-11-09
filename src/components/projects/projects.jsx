import "./projects.css"
import { Carousel } from "./carousel"
export const Projects = () => {

  const slides = [
    {
      class: "firstProject",
      title: "Game Center",
      link: "https://github.com/AbdelzaherAbdelgwad/Game-Center"
    },
    {
      class: "secondProject",
      title: "IOT Web App",
      link: "https://github.com/AbdelzaherAbdelgwad/IOT_WebApp"
    }
  ]
  

  function handleClick(e) {
    const className = e.target.classList[2]
    if(className === "firstProject"){
      window.open("https://github.com/AbdelzaherAbdelgwad/Game-Center", "_blank")
    }else if(className === "secondProject"){
      window.open("https://github.com/AbdelzaherAbdelgwad/IOT_WebApp", "_blank")
    }else if(className === "projectTitle"){
      window.open("https://github.com/AbdelzaherAbdelgwad", "_blank")
    }
  }
  return (  
  
    <div className="projectsContainer" id="projects">
        
        <div>
            <h1 className="fontFam-italic projectTitle" onClick={(e)=>{handleClick(e)}}>PROJECTS</h1>
        </div>
        <div className="projectsCarousel">
            <Carousel slides={slides} clickHandler={handleClick}/>
        </div>
    </div>
  )
}
