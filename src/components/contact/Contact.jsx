import React from 'react'
import './contact.css'
import { MdOutlineEmail } from "react-icons/md"
import { AiFillLinkedin } from "react-icons/ai"
import { BsWhatsapp } from "react-icons/bs"

const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">

          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>rachealantwiwaa077@gmail.com</h5>
            <a href="mailto:rachealantwiwaa077@gmail.com" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <AiFillLinkedin className="contact__option-icon" />
            <h4>Linkdin</h4>
            <h5>racheal-antwi</h5>
            <a href="https://www.linkedin.com/in/racheal-antwi-b00bb8222/" target="_blank">Send a message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon" />
            <h4>WhatsApp</h4>
            <h5>+233599733890</h5>
            <a href="https://api.whatsapp.com/send?phone+233599733890" target="_blank">Send a message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS*/}
        <form action="">
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="7" placeholder="Your Message" required> </textarea>
          <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact