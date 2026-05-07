import "./about.css"
export const About = () => {
  function handleClick() {
    window.location.href = ("#contact")
  }
  return (
    <div className='aboutContainer fontFam-regular' id='about'>
        <h1>ABOUT ME</h1>
        <p> &lt; Software engineer with <span>2+ years</span> of professional experience and strong software engineering fundamentals
        transferable across programming languages and frameworks. Experienced in designing, building, and maintaining scalable
        systems using <span>Go, Python, React.js, Angular, TypeScript, and ASP.NET Core</span>. Proficient in database design,
        RESTful API development, and secure authentication and authorization. Seeking a Software Engineering role where solid
        engineering principles, problem-solving skills, and adaptability across technologies are valued. /&gt; </p>
        <button onClick={handleClick}><a>CONTACT ME</a>  &gt;</button>
        <div className='bgImage'/>
        
    </div>
  )
}
