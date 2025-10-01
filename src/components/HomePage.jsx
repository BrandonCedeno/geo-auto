import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/HomePage.css';
import NavigationBar from './Navigation';
import InfoSection from './InfoSection';
import Location from './location';
import { ReactComponent as LogoAnimate } from './logoAnimate';
import { useAnimation } from './useAnimation';

function HomePage() {

  const animateRef= useAnimation();
  return (
    <div className='main-page'>
      <div className='bg'>
        <img src='assets/concrete.jpg' />
      </div>

      <div className='title'>
        <h1>Geo's
        <br></br>
        Automotive</h1>
        <br></br>
        <div className='slogan'>
        We Don't Just Fix, We Build
        </div>
      </div>
      
       <NavigationBar />

      <InfoSection />

      <Location />

      <div id='contact' ref={animateRef}  className='contact'>
        <div className='contact-card' >
          <div className='card'>
            <div className='contact-title'>Contact Us</div>
            <br></br>
            <div className='contact-info'>
            Call Us
            <a href='tel:+19548731553'>(954) 873 - 1553</a>
            <a href='tel:+19548731553'>(954) 599 - 1471</a>
            <br></br>
            Email Us
            <a href='mailto:contact@geosautomotive.com'>contact@geosautomotive.com</a>
            <br></br>
            </div>
          </div>

         </div>

          <div className='brand'>
            <LogoAnimate />
            <div ref={animateRef} className='brand-name'>
              Geo's Automotive
            </div>
            <div className='style-banner3'>
          </div>
        </div>

      </div>

      <div className='footer'>
        © 2024 Geo's Automotive, All Rights Reserved
      </div>

    </div>
  );
}

export default HomePage;
