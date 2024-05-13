import React from 'react'
import "./Testimonials.css"
import { Data } from './Data'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/pagination';



const Testimonials = () => {
    
  return (
    <section className="testimonial container section " id ="testimonials">
        <h2 className='section__title'>My clients say</h2>
        <span className='section__subtitle'>Testimonials</span>
     <Swiper className="testimonial__container "  loop={true} 
      slidesPerView={2}
     grabCursor={true}
        spaceBetween={24}
        pagination={{
          clickable: true,
        }}
       breakpoints={{
        '@0.00': {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          '@0.75': {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          '@1.00': {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          '@1.50': {
            slidesPerView: 2,
            spaceBetween: 50,
          },
         
        }}

        modules={[Pagination]}>

        {Data.map(({id, image, title, description})=> {
            return(
                <SwiperSlide className="testimonial__card" key={id}>
                    <img className='testimonial__img' src={image}></img>
                    <h3 className="testimonal__name">{title}</h3>
                    <p className="testimonial__description">{description}</p>
                </SwiperSlide>

            )
        })}

     </Swiper>
    </section>
  )
}

export default Testimonials