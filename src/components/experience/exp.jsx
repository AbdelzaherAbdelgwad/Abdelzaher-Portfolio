import './exp.css'
import "animate.css/animate.compat.css"
import ScrollAnimation from 'react-animate-on-scroll';
export const Experience = () => {
  // <div className='reactJsPng'/>
  //     </ScrollAnimation>
        
  //       <div className='htmlPng'/>
  //       <div className='cssPng'/>
  //    name   <div className='jsPng'/>
  const assets = [
    {name: "reactJsPng"},
    {name: "htmlPng"},
    {name: "cssPng"},
    {name: "jsPng"}
  ]
  return (
    <div className="expContainer" id='experience'>
      <div>
        <h1 className='fontFam-italic'>FRONTEND DEVELOPMENT</h1>
        <div className='tabletScreen fontFam-regular  '>
          <div className='tabRow'>
            <div className="expCard">
              <h2>REACT.JS</h2>
            </div>
            <div className="expCard">
              <h2>REDUX TOOLKIT</h2>
            </div>
            <div className="expCard">
              <h2>API</h2>
              <h2>INTEGRATION</h2>
            </div>
          </div>
          <div className='tabRow'>
            <div className="expCard">
              <h2>SINGLE-PAGE</h2>
              <h2>APPLICATIONS</h2>
            </div>
            <div className="expCard">
              <h2>RESPONSIVE</h2>
              <h2>DESIGN</h2>
            </div>

          </div>
          <div className='tabRow'>
            <div className="expCard">
              <h2>OPTIMIZED</h2>
              <h2>PERFORMANCE</h2>
            </div>
          </div>
          
        </div>
      </div>
      
      <div style={{display:"flex"}}>
{/*       
      <ScrollAnimation animateIn='flash' delay={300}>
        <div className='reactJsPng'/>
      </ScrollAnimation>
        
        <div className='htmlPng'/>
        <div className='cssPng'/>
        <div className='jsPng'/> */}
        {assets.map(({name},index)=>{
          
          return (<ScrollAnimation animateIn='flash' delay={(index+1)*100+200} key={name}>
          <div className={name === "reactJsPng"?name+" rotate":name} />
          </ScrollAnimation>)
          
        })}
      </div>

    </div>

  )
}
