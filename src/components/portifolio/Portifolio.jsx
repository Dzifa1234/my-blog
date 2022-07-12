import React from 'react'
import './portifolio.css'
import IMG1 from '../../assets/portifolio1.webp'
import IMG2 from '../../assets/portifolio2.webp'

import IMG3 from '../../assets/portifolio3.webp'

import IMG4 from '../../assets/portifolio4.jpeg'

import IMG5 from '../../assets/portifolio5.webp'

import IMG6 from '../../assets/portifolio6.webp'




const Portifolio = () => {
  return (
    <section id='portifolio'>
      <h5>My Recent Work</h5>
      <h2>Portifolio</h2>
      <div className="container portifolio__container">
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG1} alt="" />
          </div>
          <h3>This Is A Portifolio Item Title</h3>
          <div className="portifolio__item-cta">
            <a href="https://github.com/Racheal1234/RA" className="btn">Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>

        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG2} alt="" />
          </div>
          <h3>This Is A Portifolio Item Title</h3>
          <div className="portifolio__item-cta">
            <a href="https://github.com/Racheal1234/RA" className="btn">Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>

        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG3} alt="" />
          </div>
          <h3>This Is A Portifolio Item Title</h3>
          <div className="portifolio__item-cta">
            <a href="https://github.com/Racheal1234/RA" className="btn">Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>

        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG4} alt="" />
          </div>
          <h3>Futuristic dashboards to visualize your data</h3>
          <div className="portifolio__item-cta">
            <a href="https://github.com/Racheal1234/RA" className="btn">Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>

        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG5} alt="" />
          </div>
          <h3>Templates to promote tasks and time management</h3>
          <div className="portifolio__item-cta">
            <a href="https://github.com/Racheal1234/RA" className="btn">Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>

        </article>
        <article className="portifolio__item">
          <div className="portifolio__item-image">
            <img src={IMG6} alt="" />
          </div>
          <h3></h3>
          <div className="portifolio__item-cta">
            <a href="https://github.com/Racheal1234/RA" className="btn">Github</a>
            <a href="https://dribbble.com/alien_pixels" className="btn btn-primary" target="_blank">Live Demo</a>
          </div>

        </article>






      </div>
    </section >
  )
}

export default Portifolio