import React from 'react'
import './Contact.css'
import msg_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'

const Contact = () => {
    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "57772186-a41e-4318-a34e-d11b75caf52d");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className='contact'>
        <div className="contact-col" id='Contact-us'>
            <h3>send us a message <img src={msg_icon  } alt="" /></h3>
            <p>Have any questions or need assistance? We're here to help!
Fill out the form below, and our team will get back to you as soon as possible.

We look forward to hearing from you!</p>
                <ul>
                    <li> <img src={mail_icon} alt="" />ekheganesh99@gmail.com</li>
                    <li> <img src={phone_icon} alt="" />9322945038</li>
                    <li> <img src={location_icon} alt="" />Kuber Park,Lohagaon,pune <br /> 5545574 USA</li>
                </ul>
        </div>

        <div className="contact-col">
            <form onSubmit={onSubmit} >
                <label>Your name</label>
                <input type="text" name='name' placeholder='Enter your name' required />
                <label>phone number</label>
                <input type="tel" name='phone' placeholder='Enter your phone number' required />
                <label> write your massage here</label>
                <textarea name="message" rows="6" placeholder='enter your message' required></textarea>
                <button type='submit' className='btn dark-btn' >Submit Now <img src={white_arrow} alt="" /></button>
            </form>
            <span>{result}</span>
        </div>
   </div>
  )
}

export default Contact