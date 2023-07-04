import React from 'react'
import '../../styles/testimonials.css';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
// import required modules
import { EffectCards } from "swiper";
import  avatar01 from '../../assets/img/avatar01.png'
import  avatar02 from '../../assets/img/avatar02.png'
export default function Testimonials() {
  return (
    <>
      <section>
      <div className='container sliders'>

      <h2 className='section__title'>Testimonials</h2>
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='slide__item'>
        <div className='slide__img-01'> <img src={avatar01} alt=''/></div>
        <h4> Tia Kapoor</h4>
        <p> This is a fantastic gym!! All the trainers are super nice and take an interest in you no matter what fitness level you're at.
         I really like how they give me tips and tricks to get the most out of every workout.
          I've been going for a little bit and am already seeing a big change in my energy levels and body.
           It's great! I feel 10 years younger!</p>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className='slide__item'>
        <div className='slide__img-02'> <img src={avatar02} alt=''/></div>
        <h4> Sonali Patel</h4>
        <p> By far the best facility around. This new location is mint from the staff, to the equipment, to the facility itself.
         From the ownership, to management, to the trainers, by far the nicest and most knowledgeable staff in the business today.
          I wouldn't hesitate to recommend FitBody to anyone. 
          I am certainly satisfied thus far and have been blown away by my experience at this new facility</p>
        </div></SwiperSlide>
        <SwiperSlide><div className='slide__item'>
        <div className='slide__img-03'> <img src={avatar01} alt=''/></div>
        <h4> Riya Singh</h4>
        <p>  AMAZING GYM, AMAZING WORKOUTS! The staff here is incredibly friendly and extremely qualified! 
        They know how to push you to the limit in the best way possible with your workouts.
         You will not leave disappointed! Such a family vibe as soon as you walk in the doors 
         I highly recommend checking this gym out.</p>
        </div></SwiperSlide>
      </Swiper>
      </div>
      </section>
    </>
  );
}
