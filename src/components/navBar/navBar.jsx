import { useState,useEffect } from "react"
import "./navBar.css"
export const NavBar = () => {
  const values = ["Home","About","Education","Experience","Projects","Contact"]
  const [className,setClassName]= useState(["clicked",...Array(6).fill("notClicked")])


  const handleScroll = () => {
      let newScroll = window.scrollY
      
      let position = Math.round(newScroll/(window.innerWidth/1.77))
      if(position>3){
        position = position-1
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

  
  
  return (
    <div className='navBar fontFam-regular' >
      {values.map((value,index)=>{
        return (
          <h2 className={className[index]} key={value}>
            <a href={value === "Home"?'#':'#'+value.toLowerCase()}>{value}</a>
          </h2>)
      })}
    </div>
  )
}
