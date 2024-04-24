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
        Geo's
        <br></br>
        Automotive
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
            <a href='tel:+19548761570'>(954) 876 - 1570</a>
            <br></br>
            Email Us
            <a href='mailto:contact@geosautomotive.com'>contact@geosautomotive.com</a>
            <br></br>
            Text Us
            <a href='sms:+19544066245'>(954) 406 - 6245</a>
            </div>
              <br></br>
              <div className='opening'>Opening Hours:</div>
              <h3>8:00 AM - 5:00 PM</h3>
              <h3>MON - FRI</h3>
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
