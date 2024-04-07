import React from 'react';
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
      
       <NavigationBar />

      <div className='title-container' id='home'>
        <h1 className='title'>GEO'S AUTOMOTIVE</h1>
        <h2 className='slogan'>We Care and We Deliver</h2>
      </div>

      <InfoSection />

      <Location />

      <div id='contact' ref={animateRef}  className='contact'>
        <div className='contact-card' >
        Contact Us
        <br></br>
          <div className='card'>
            <h3>Email: jcedeno51@comcast.net</h3>
            <h3>Phone: (954) 873 - 1553</h3>
              <br></br>
              <h3>Opening Hours:</h3>
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
