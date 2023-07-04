import React from 'react'
import '../../styles/exercises.css'
import lunges from '../../assets/img/lunges.png'
import yoga from '../../assets/img/yoga-pose.png'
import extended from '../../assets/img/extended.png'

function Exercises() {
  return (
    <section id='schedule'>
    <div className='container exercise__container'>
    <div className='exercise__top'>
    <h2 className='section__title'>
    Benefits of <span className='highlights'>Exercise</span>
    </h2>
    <p> Being physically active can improve your brain health,<br/>
     strengthen bones and muscles, and improve your activities.</p>
    </div>

    <div className='exercise__wrapper'>
    <div className='exercise__item' data-aos='zoom-in' 
    data-aos-duration='1500'>
    <span  className='exercise__icon'> 
    <img src={lunges} alt=''/>
    </span>

    <div className='exercise__content'>
    <h4> Healthy Life</h4>
    <p> Adults who sit less and do any amount of moderate-to-vigorous
     physical activity gain some health benefits.</p>
    </div>
    </div>
    <div className='exercise__item' data-aos='fade-up' 
    data-aos-duration='1500'>
    <span  className='exercise__icon'> 
    <img src={yoga} alt=''/>
    </span>

    <div className='exercise__content'>
    <h4> Increased Flexibility</h4>
    <p> Adults who sit less and do any amount of moderate-to-vigorous
     physical activity gain some health benefits.</p>
    </div>
    </div>
    <div className='exercise__item' data-aos='fade-up' 
    data-aos-duration='1500'>
    <span  className='exercise__icon'> 
    <img src={extended} alt=''/>
    </span>

    <div className='exercise__content'>
    <h4> Reducing Blood Pressure</h4>
    <p> Adults who sit less and do any amount of moderate-to-vigorous
     physical activity gain some health benefits.</p>
    </div>
    </div>

    </div>
    </div>
    
    </section>
  )
}

export default Exercises