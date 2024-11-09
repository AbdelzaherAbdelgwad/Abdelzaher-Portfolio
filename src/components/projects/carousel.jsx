/* eslint-disable react/prop-types */
import "./carousel.css"
import { useState } from 'react'
export const Carousel = (props) => {
    const length = props.slides.length
    const [index, setIndex] = useState(0)   
    function handleNext(){
        if(index < length-1){
            setIndex(index+1)
        }else{
            setIndex(0)
        }
    }
    function handlePrev(){
        if(index>0){
            setIndex(index-1)
        }else{
            setIndex(length-1)
        }
    }
  return (
    <div className='carouselContainer'>
        <div className='arrowContainer'>
            <img className="arrow" src='/Abdelzaher-Portfolio/images/leftArrow.png' onClick={handlePrev}/>
            <div>
                <div className={'slide projectWindow ' + props.slides[index].class} onClick={(e)=>props.clickHandler(e)}></div>
                
            </div>
            <img className="arrow" src='/Abdelzaher-Portfolio/images/rightArrow.png' onClick={handleNext}/>
        </div>
        <h1 className='slideTitle fontFam-regular'>{props.slides[index].title}</h1>
    </div>
  )
}
