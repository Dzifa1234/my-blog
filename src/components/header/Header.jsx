import React from 'react'
import './header.css'
import CTA from './CTA'
import HE from '../../assets/he.jpeg'
import HeaderSocial from './HeaderSocial'






const Header = () => {
  return (
    <header>
      <div className="container header--container">
        <h3>Hello I'm</h3>
        <h1>Racheal Dzifa Antwiwaa</h1>
        <h3 className="text-light">Fullstack Developer</h3>
        <CTA />
        <HeaderSocial />
        <div className="me">
          <img src={HE} alt="he" />
        </div>
        <a href="#contact" className='scroll--down'>Scroll Down</a>
      </div>
    </header>
  )
}

export default Header