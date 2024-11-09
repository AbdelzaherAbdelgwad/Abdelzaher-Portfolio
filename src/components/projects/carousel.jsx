/* eslint-disable react/prop-types */
import "./carousel.css"
import { useState } from 'react'
export const Carousel = (props) => {
    const length = props.slides.length
    const [index, setIndex] = useState(0)  
    const [classes, setClasses] = useState('slide projectWindow ')
    const [isAnimating, setIsAnimating] = useState(false)

    function handleNext(){
        if (isAnimating) return
        setIsAnimating(true)
        setClasses(classes + 'nextAnimation ')
        setTimeout(()=>{
            if(index < length-1){
                setIndex(index+1)
            }else{
                setIndex(0)
            }
            setClasses('slide projectWindow nextHideAnimation ')
        },100)
        setTimeout(()=>{
            setClasses('slide projectWindow ')
            setIsAnimating(false)
        },400)
    }

    function handlePrev(){
        if (isAnimating) return
        setIsAnimating(true)
        setClasses(classes + 'prevAnimation ')
        setTimeout(()=>{
            if(index>0){
                setIndex(index-1)
            }else{
                setIndex(length-1)
            }
            setClasses('slide projectWindow prevHideAnimation ')
        },100)
        setTimeout(()=>{
            setClasses('slide projectWindow ')
            setIsAnimating(false)
        },400)
    }

  return (
    <div className='carouselContainer'>
        <div className='arrowContainer'>
            <img className="arrow" src='/Abdelzaher-Portfolio/images/leftArrow.png' onClick={handlePrev}/>
            <div className='slideContainer'>
                <div className={ classes + props.slides[index].class} onClick={(e)=>props.clickHandler(e)}></div>
                
            </div>
            <img className="arrow" src='/Abdelzaher-Portfolio/images/rightArrow.png' onClick={handleNext}/>
        </div>
        <h1 className='slideTitle fontFam-regular'>{props.slides[index].title}</h1>
    </div>
  )
}
