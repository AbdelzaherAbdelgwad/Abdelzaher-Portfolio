import "./about.css"
export const About = () => {
  return (
    <div className='aboutContainer fontFam-regular' id='about'>
        <h1>ABOUT ME</h1>
        <p> &lt; Results-driven computer science graduate with <span>3+ years</span> of hands-on experience in Full-stack web development. 
        Specialized in building scalable, responsive web applications using <span>React.js, Spring Boot, and MySQL</span>. 
        Seeking a challenging role as a <span>Front-End or full-stack Developer</span> in a dynamic tech company where I can leverage 
        my expertise in front-end design, RESTful API development, and database optimization to drive innovation and deliver 
        high-quality software solutions /&gt; </p>
        <button onClick={()=>{alert("call:+201060206732")}}>CONTACT ME  &gt;</button>
        <div className='bgShapes'/>
        
    </div>
  )
}
