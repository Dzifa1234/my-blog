import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { SiInstagram } from 'react-icons/si'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">DZIFA</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portifolio">Portifolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>





      </ul>
      <div className="footer__socials">
        <a href="https://linkdin.com"><BsLinkedin /></a>
        <a href="https://instagram.com"><SiInstagram /></a>
        <a href="https://github.com"><FaGithub /></a>
      </div>
      <div className="footer__copyright">
        <small>&copy; DZIFA'S Tutorials. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer