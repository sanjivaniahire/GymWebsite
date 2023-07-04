import React from 'react'
import '../../styles/footer.css';
import logo from '../../assets/img/dumble.png'
function Footer() {
    const year = new Date().getFullYear()
  return (
    <footer className='footer' data-aos='fade-up' 
    data-aos-duration='1500'>
    <div className='container'>
    <div className='footer__wrapper'>
    <div className='footer__box'>
    <div className='logo'>
    <div className='logo__img'><img src={logo} alt=''/></div>
    <h2>FitBody</h2>
    </div>
    <p> The gym is a refuge from the chaos of everyday life.
     It's a sanctuary where you can shed your insecurities and doubts, and instead, cultivate confidence and resilience. </p>
    </div>

    <div className='footer__box'>
    <h4 className='footer__title'>Company</h4>
    <ul className='footer__links'>
    <li>
    <a href='#'>Our Program</a>
    </li>
    <li>
    <a href='#'>Our Plan</a>
    </li>
    <li>
    <a href='#'>Become a member</a>
    </li>
    </ul>
    </div>
    <div className='footer__box'>
    <h4 className='footer__title'>Quick Links</h4>
    <ul className='footer__links'>
    <li>
    <a href='#'>About us</a>
    </li>
    <li>
    <a href='#'>Contact us</a>
    </li>
    <li>
    <a href='#'>Support</a>
    </li>
    </ul>
    </div>
    <div className='footer__box'>
    <h4 className='footer__title'>Quick Links</h4>
    <ul className='footer__links'>
    <li>
    <a href='#'>About us</a>
    </li>
    <li>
    <a href='#'>Contact us</a>
    </li>
    <li>
    <a href='#'>Support</a>
    </li>
    </ul>
    </div>
    </div>
    <p className='copyright'>
    Copyright - {year} developed by Sanjivani All rights Reserved.
    </p>
    </div>
    </footer>
  )
}

export default Footer