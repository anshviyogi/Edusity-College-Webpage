import React from 'react'
import './Contact.css'
import mgs_icon from '../../assets/msg-icon.png'
import mail_icon from '../../assets/mail-icon.png'
import phone_icon from '../../assets/phone-icon.png'
import location_icon from '../../assets/location-icon.png'
import white_arrow from '../../assets/white-arrow.png'
const Contact = () => {
  return (
    <div className='contact'>
        <div className="contact-col">
            <h3>Send us a message <img src={mgs_icon} alt="" /></h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ratione voluptatem dolor harum laboriosam non ab nulla aliquid eius perspiciatis reprehenderit. Perferendis quis tempore dignissimos minus dolorum voluptate nihil cumque enim.</p>
            <ul>
                <li><img src={mail_icon} alt="" />Contact@ansh.com</li>
                <li><img src={phone_icon} alt="" />+1 7982 045 4412</li>
                <li><img src={location_icon} alt="" />77 Bridge Masscow, Cambridge <br /> MA 125790, United States</li>
            </ul>
        </div>
        <div className="contact-col">
            <form>
                <label>Your Name</label>
                <input type="text" name='name' placeholder='Enter your name' required />

                <label>Phone Number</label>
                <input type="tel" name='phone' placeholder='Enter your mobile number' required />
                
                <label>Write your message here</label>
                <textarea name="message" rows={6} placeholder='Enter your message' required></textarea>

                <button className='btn dark-btn'>Submit now <img src={white_arrow} alt="" /></button>
            </form>

            {/* <span>Sending</span> */}
        </div>
    </div>
  )
}

export default Contact
