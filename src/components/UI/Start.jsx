import React from 'react'
import '../../styles/start.css'
import trainerImg from '../../assets/img/trainer.png'
function Start() {
  return (
    <section id='classes'>
    <div className='container'>
    <div className='start__wrapper'>
    <div className='start__img'>
    <img src={trainerImg} alt='' data-aos='fade-left' 
    data-aos-duration='1500'/>
    </div>

    <div className='start__content' data-aos='fade-right' 
    data-aos-duration='1500'>
    <h2 className='section__title'> 
    Ready to make a  <span className='highlights'>change?</span>
    </h2>
    <p> You're going to have to let it hurt. Let it suck. The harder you work, the better you will look.
     Your appearance isn't parallel to how heavy you lift, it's parallel to how hard you work.
     Just believe in yourself.Even if you don't, just pretend that you do and at some point, you will.
     </p>
     <button className='register__btn'>Get Started</button>
    </div>
    </div>
    </div>
    </section>

  )
}

export default Start