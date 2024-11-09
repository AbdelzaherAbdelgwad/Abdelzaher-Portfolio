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

    const className = e.target.classList.value
    if( className.includes("firstProject")){
      window.open(slides[0].link, "_blank")
    }else if(className.includes("secondProject")){
      window.open(slides[1].link, "_blank")
    }else if(className.includes("projectTitle")){
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
