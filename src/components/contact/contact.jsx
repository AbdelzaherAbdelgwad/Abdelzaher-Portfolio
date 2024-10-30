/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./contact.css"
export const Contact = () => {
    const [name,setName] = useState('')
    const [email,setEmail] = useState('')
    const [message,setMessage] = useState('')

    function debounce(func,delay = 500) {
        let timeoutId = null;
        return function (...args) {
            if (timeoutId) clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                func.apply(null, args);
            }, delay);
        }
    }
    function handleChange(e) {
        const name = e.target.name
        const value = e.target.value

        if(name === "name"){
            setName(value)
        }else if(name === "email"){
            setEmail(value)
        }else{
            setMessage(value)
        }
    }

    const debouncedHandleChange = debounce(handleChange)

    function handleClick() {
        if(name && email && message){
            const subject = "Hi I am " + name
            const body = "Email: " + email + "%0A%0A" + "Message: " + message;
            window.location = ("mailto:abdelzaher.abdelgwad@gmail.com?subject="+ subject + "&body=" + body)        
        }

    }
  return (
    <div className="contactContainer" id="contact">
        <div className="leftCards">
            <div className="tobContactCard fontFam-italic">
            <h1>GET IN <br/>TOUCH</h1>
            <div className="backGround"></div>
            </div>
            <div className="bottomContactCard">
                <div><a href="https://www.linkedin.com/in/abdelzaher-a-600477110/" target="_blank"><h2>LINKEDIN</h2></a></div>
                <div><a href="https://github.com/AbdelzaherAbdelgwad" target="_blank"><h2>GITHUB</h2></a></div>
                {/* <div><a href="mailto:abdelzaher.abdelgwad@gmail.com"><h2>EMAIL</h2></a></div> */}
            </div>
            <div><a href="tel:+201060206732" target = "_blank" onClick={()=>alert("Phone_1:+201060206732 | Phone_2:+01141338263")}><h2>PHONE</h2></a></div>
        </div>
        <div className="rightCards">
            <div className="phoneFrame fontFam-regular">
                <h3>Name:</h3>
                <input placeholder="Name" type="text" name="name" onChange={(e)=>{debouncedHandleChange(e)}}></input>
                <h3>Email:</h3>
                <input placeholder="Email" type="email" name="email" onChange={(e)=>{debouncedHandleChange(e)}}></input>
                <h3>Message:</h3>
                <textarea placeholder="Write down your message" name="message" onChange={(e)=>{debouncedHandleChange(e)}}></textarea>
                <button onClick={handleClick}>SEND</button>
            </div>
        </div>
    </div>
  )
}
