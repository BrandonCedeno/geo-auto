import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/HomePage.css';
import NavigationBar from './Navigation';
import InfoSection from './InfoSection';
import Location from './location';
import { ReactComponent as LogoAnimate } from './logoAnimate';
import { useAnimation } from './useAnimation';

const BackgroundVideo = () => {
  return (
      <div style={{ 
          position: 'fixed', 
          top: 0, 
          left: 0, 
          width: '100%', 
          alignItems: 'center',
          height: '100%', 
          overflow: 'hidden',
          zIndex: -1
      }}>
          <video style={{ 
              position: 'absolute',
              scale:'1',
              width: 'auto',
              height: 'auto',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)'
          }} autoPlay loop muted>
              <source src="assets/Render.mp4" type="video/mp4" />
          </video>
      </div>
  );
};
function HomePage() {

  const animateRef= useAnimation();

  return (
    <div className='main-page'>

      <BackgroundVideo />
      
       <NavigationBar />

      <InfoSection />

      <Location />

      <div id='contact' ref={animateRef}  className='contact'>
        <div className='contact-card' >
        Contact Us
        <br></br>
          <div className='card'>
            <h3>Email: jcedeno51@comcast.net</h3>
            <h3>Text: (954) 406 - 6245</h3>
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
