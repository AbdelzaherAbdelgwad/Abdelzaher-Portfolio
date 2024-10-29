import "./contact.css"
export const Contact = () => {
  return (
    <div className="contactContainer" id="contact">
        <div className="leftCards">
            <div className="tobContactCard fontFam-italic">
            <h1>GET IN <br/>TOUCH</h1>
            <div className="backGround"></div>
            </div>
            <div className="bottomContactCard">
                <div><a href="https://www.linkedin.com/in/abdelzaher-a-600477110/"><h2>LINKEDIN</h2></a></div>
                <div><a href="https://github.com/AbdelzaherAbdelgwad"><h2>GITHUB</h2></a></div>
                {/* <div><a href="mailto:abdelzaher.abdelgwad@gmail.com"><h2>EMAIL</h2></a></div> */}
            </div>
            <div><a href="tel:+201060206732"><h2>PHONE</h2></a></div>
        </div>
        <div className="rightCards">
            <div className="phoneFrame fontFam-regular">
                <h3>Name:</h3>
                <input placeholder="Name" type="text"></input>
                <h3>Email:</h3>
                <input placeholder="Email" type="email"></input>
                <h3>Message:</h3>
                <textarea placeholder="Write down your message"></textarea>
                <button>SEND</button>
            </div>
        </div>
    </div>
  )
}
