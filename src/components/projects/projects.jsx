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
    },
    {
      class: "thirdProject",
      title: "Examination System DB",
      link: "https://github.com/AbdelzaherAbdelgwad/ITI-Examination-system"
    },
    {
      class: "fourthProject",
      title: "Tabeekh",
      link: "https://github.com/AhmedNadyRamadan/Tabeekh"
    }
  ]
  

  function handleClick(e) {
    const className = e.target.classList.value
    const slide = slides.find(s => className.includes(s.class))
    if (slide) {
      window.open(slide.link, "_blank")
    } else if (className.includes("projectTitle")) {
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
