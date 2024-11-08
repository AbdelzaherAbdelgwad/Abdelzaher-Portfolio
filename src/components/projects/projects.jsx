import "./projects.css"
export const Projects = () => {

  function handleClick(e) {
    const className = e.target.classList[1]
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
        <div>
            <div className="projectWindow firstProject" onClick={(e)=>{handleClick(e)}}></div>
            <div className="projectWindow secondProject" onClick={(e)=>{handleClick(e)}}></div>
        </div>
    </div>
  )
}
