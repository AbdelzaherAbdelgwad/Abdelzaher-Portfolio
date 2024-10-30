import "./exp_ext.css";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

export const Experience_ext = () => {
  const frontendExp = [
    {name:"ANGULAR FRAMEWORK"},
    {name:"Dependency Injection"},
    {name:"Dynamic User Interfaces"},
    {name:"data binding"}
  ]
  const BackendExp = [
    {name:"Spring Boot"},
    {name:"Java"},
    {name:"Spring Security"},
    {name:"RESTful API Design"},
    {name:"MySQL Proficiency"}
  ]

  return (
    <div className="expExtContainer">
        <div className="backGroundImg"/>

        <h1 className="title_1">Additional Front-End Technologies</h1>
        <div className="gridBlock fontFam-regular">
            {frontendExp.map(({name},index)=>{
              return (<ScrollAnimation key={name} animateIn="fadeInBottomRight" delay={(index+1)*50 +100}>
              <div className={index === 0?"gridSquare firstBlock":"gridSquare"}><h2>{name}</h2></div>
              </ScrollAnimation>)
            })}
        </div>

        <h1 className="title_2">Back-End Development & Database Management</h1>
        <div className="gridBlock fontFam-regular">
        {BackendExp.map(({name},index)=>{
              return (<ScrollAnimation key={name} animateIn="fadeInUp" delay={(index+1)*50 +100}>
              <div className={index === 0?"gridSquare firstBlock":"gridSquare"}><h2>{name}</h2></div>
              </ScrollAnimation>)
            })}

        </div>
    </div>
  )
}
