import React from 'react'
import './nav.css'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { BiBookAlt } from 'react-icons/bi'
import { RiServiceLine } from 'react-icons/ri'
import { RiMessage2Fill } from 'react-icons/ri'
import { useState } from 'react'


const Nav = () => {
  const [activeNav, setActveNav] = useState('#')
  return (
    <nav>
      <a href="#" onClick={() => setActveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BiBookAlt /></a>
      <a href="#service" onClick={() => setActveNav('#service')} className={activeNav === '#service' ? 'active' : ''}><RiServiceLine /></a>
      <a href="#contact" onClick={() => setActveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><RiMessage2Fill /></a>
    </nav >
  )
}

export default Nav