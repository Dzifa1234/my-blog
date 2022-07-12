import React from 'react'
import './testimonial.css'
import AVTR1 from '../../assets/avatar1.jpeg'
import AVTR2 from '../../assets/avatar2.webp'
import AVTR3 from '../../assets/avatar3.jpeg'
import AVTR4 from '../../assets/avatar4.jpeg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: AVTR1,
    name: 'Racheal Antwi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam esse corrupti sequi mollitia ullam nemo sed veritatis quasi impedit doloremque blanditiis architecto distinctio unde voluptatibus, quo sit. Consequuntur, fuga!'
  },
  {
    avatar: AVTR2,
    name: 'Frank Ebuka Nnuekwe',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam esse corrupti sequi mollitia ullam nemo sed veritatis quasi impedit doloremque blanditiis architecto distinctio unde voluptatibus, quo sit. Consequuntur, fuga!'
  },

  {
    avatar: AVTR3,
    name: 'Sandra Owusu',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam esse corrupti sequi mollitia ullam nemo sed veritatis quasi impedit doloremque blanditiis architecto distinctio unde voluptatibus, quo sit. Consequuntur, fuga!'
  },

  {
    avatar: AVTR4,
    name: 'Emmanuel Antwi',
    review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis laboriosam esse corrupti sequi mollitia ullam nemo sed veritatis quasi impedit doloremque blanditiis architecto distinctio unde voluptatibus, quo sit. Consequuntur, fuga!'
  },
]



const Testimonial = () => {
  return (
    <section id='testimoial'>
      <h5>Review From Client</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container">


        {
          data.map(({ avatar, name, review }, index) => {
            return (
              < SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={avatar} />
                </div>
                <h5 className="client__name">{name}</h5>
                <small className="client__review">{review}</small>

              </SwiperSlide>

            )
          })
        }
      </Swiper >
    </section >
  )
}

export default Testimonial