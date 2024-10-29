import './exp.css'
export const Experience = () => {
  return (
    <div className="expContainer" id='experience'>
      <div>
        <h1 className='fontFam-italic'>FORNTEND DEVELOPMENT</h1>
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
        <div className='reactJsPng'/>
        <div className='htmlPng'/>
        <div className='cssPng'/>
        <div className='jsPng'/>
      </div>

    </div>

  )
}
