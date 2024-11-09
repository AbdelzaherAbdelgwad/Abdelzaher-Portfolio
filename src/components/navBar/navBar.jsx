import { useState,useEffect } from "react"
import "./navBar.css"
import "animate.css/animate.compat.css"

export const NavBar = () => {
  const values = ["Home","About","Education","Experience","Projects","Contact"]
  const [className,setClassName]= useState(["clicked",...Array(5).fill("notClicked")])
  const [toggleNav,setToggleNav]= useState(false)
  const [startNav,setStartNav]= useState(false)
  let newScroll = window.scrollY

  const handleScroll = () => {
      let newScroll = window.scrollY
      
      // let position = Math.round(newScroll/(window.innerWidth/1.77))
      let position = Math.floor(newScroll/(window.innerHeight))
      if(position>3){
        position = position-1
      }
      if(position === values.length){
        position = values.length-1
        console.log(position)

      }
      setClassName((prev)=>{
        let newNames = [...prev]
        newNames.forEach((_,index)=>{
          if(index === position){
            newNames[index] = "clicked" 
          }else{
            newNames[index] = "notClicked"
          }
        })
        return newNames
      })
      return newScroll

  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  function showNavBar() {
    setToggleNav(!toggleNav)
    setStartNav(true)
  }
  
  return (
    <>
<div className='navBar fontFam-regular animate' >
      {values.map((value,index)=>{
        return (
          <h2 className={className[index]} key={value}>
            <a href={value === "Home"?'#':'#'+value.toLowerCase()}>{value}</a>
          </h2>)
      })}
      {/* {<a>{Math.floor(newScroll/(window.innerHeight))}</a>} */}
    </div>
    <div>
        <div className="toggleNavBubble" onClick={showNavBar}>

        </div>
        
        {startNav && <div className={toggleNav? "navFullBar animateNav" : "navFullBar animateNavReverse"}>
          <div className="toggleNavBubble" onClick={showNavBar}/>
          {values.map((value,index)=>{
            return (
              <h2  key={value}>
                <a href={value === "Home"?'#':'#'+value.toLowerCase()}>{value}</a>
              </h2>)
          })}
          
        </div>}
    </div>
    </>
    
    
  )
}
