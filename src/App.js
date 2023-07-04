import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Aos from 'aos';
import './App.css';
import Header from './components/Header/Header';
import Hero from './components/UI/Hero';
import Exercises from './components/UI/Exercises';
import Start from './components/UI/Start';
import Pricing from './components/UI/Pricing';
import Testimonials from './components/UI/Testimonials';
import Footer from './components/UI/Footer';
import Register from './components/Register';
import Login from './components/Login';

function App() {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <Router>
      <div className='App'>
        <div className='background-animation'></div>
        <nav>
          <ul>
            <li>
              <Link to='/register'></Link>
            </li>
            <li>
              <Link to='/login'></Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path='/register' element={<Register />} />
          <Route path='/login' element={<Login />} />
        </Routes>

        <Header />
        <Hero />
        <Exercises />
        <Start />
        <Pricing />
        <Testimonials />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
