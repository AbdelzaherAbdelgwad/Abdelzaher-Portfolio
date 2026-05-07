import "./exp_ext.css";
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';

export const Experience_ext = () => {
  const skills = [
    "Go (Golang)",
    "Python",
    "React.js",
    "Next.js",
    "TypeScript",
    "Angular",
    "ASP.NET Core",
    "Spring Boot",
    "ArcGIS SDK",
    "PySide6 / Qt",
    "i18next",
    "OpenAPI",
    "Redux Toolkit",
    "sqlc",
    "PostgreSQL",
    "Tailwind CSS",
    "Domain-Driven Design",
    "RESTful APIs"
  ]

  return (
    <div className="expExtContainer">
        <div className="backGroundImg"/>

        <h1 className="title_1">Technical Skills</h1>
        <div className="gridBlock fontFam-regular">
            {skills.map((name, index) => {
              return (<ScrollAnimation key={name} animateIn="fadeInUp" delay={(index+1)*50 +100}>
              <div className={index === 0 ? "gridSquare firstBlock" : "gridSquare"}><h2>{name}</h2></div>
              </ScrollAnimation>)
            })}
        </div>
    </div>
  )
}
