import React from 'react';
import './styles/location.css'
import { useAnimation } from './useAnimation';

const Location = () => {
    const address = '5150 SW 48th Way, Davie, FL'
    const animateRef = useAnimation();

  return (
    <div className='loc-container'>
        <div id= 'location' className='location'>
            <iframe
                className='map-iframe'
                width="100%"
                height="400px"
                style={{border:0}}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAl40eKrXbW3dlQ5QQc0VKTIe_1_5z_CNI&q=${encodeURIComponent(address)}`}
            >
            </iframe>
            <div className='building'>
                <img src='assets/building.jpg'/>
            </div> 
        </div>
        <div ref={animateRef} className='loc-title'>
          5150 SW 48th Way, Davie, FL 33314<br></br>
          Suite #610
        </div>
    </div>
  );
}

export default Location;
