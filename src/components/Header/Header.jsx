import React, { useEffect, useRef } from 'react';
import { BrowserRouter as Router, Link, useNavigate } from 'react-router-dom';
import '../../styles/header.css';
import logo from '../../assets/img/dumble.png';

function Header() {
  const headerRef = useRef(null);
  const navigate = useNavigate();

  const headerFunc = () => {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      headerRef.current.classList.add('sticky__header');
    } else {
      headerRef.current.classList.remove('sticky__header');
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', headerFunc);
    return () => window.removeEventListener('scroll', headerFunc);
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    const targetAttr = e.target.getAttribute('href');
    const location = document.querySelector(targetAttr).offsetTop;

    window.scrollTo({
      left: 0,
      top: location - 80,
    });
  };

  const handleRegisterClick = (e) => {
    e.preventDefault();
    window.open('/register', '_blank', 'noopener noreferrer');
  };

  return (
    <header className='header' ref={headerRef}>
      <div className='container'>
        <div className='nav__wrapper'>
          <div className='logo'>
            <div className='logo__img'>
              <img src={logo} alt='' />
            </div>
            <h2>FitBody</h2>
          </div>
          <div className='navigation'>
            <ul className='menu'>
              <li className='nav__item'>
                <a onClick={handleClick} href='#home'>
                  Home
                </a>
              </li>
              <li className='nav__item'>
                <a onClick={handleClick} href='#schedule'>
                  Schedule
                </a>
              </li>
              <li className='nav__item'>
                <a onClick={handleClick} href='#classes'>
                  Classes
                </a>
              </li>
              <li className='nav__item'>
                <a onClick={handleClick} href='#pricing-plan'>
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          <div className='nav__right'>
            <button className='register__btn' onClick={handleRegisterClick}>
              Register
            </button>
            <span className='mobile__menu'>
              <i className='ri-menu-line'></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
