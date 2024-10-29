import React from 'react'
import "./cover.css"

export const Cover = () => {
  function handleClick() {
    alert("on")
  }
  return (
    
    <div className='coverContainer'>
      <div className='coverGrid' >
          <div>
            <h1 className='fontFam-regular' style={{margin:"0px",fontSize:"10vw",transform: 'translateY(4vw)'}}>ABDELZAHER</h1>
            <h1 className='fontFam-regular' style={{margin:"0px",fontSize:"7vw"}}>ABDELGWAD</h1>
            <p className='fontFam-regular'>"Hello, I'm Abdelzaher Abdelgwad. Welcome to my portfolio, where I’m excited to share my professional journey and showcase my work with you."</p>
          </div>
      </div>
      
        <div class="mask"></div>
    
    </div>
  )
}
