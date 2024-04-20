import React from 'react';
import './styles/location.css'
import { useAnimation } from './useAnimation';

const Location = () => {
    const address = '7548 W McNab Rd, North Lauderdale, FL'
    const animateRef = useAnimation();

  return (
    <div className='loc-container'>
        <div id= 'location' className='location'>
            <iframe
                className='map-iframe'
                style={{border:0}}
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAl40eKrXbW3dlQ5QQc0VKTIe_1_5z_CNI&q=${encodeURIComponent(address)}`}
            >
            </iframe>
            <div className='building'>
                <img src='assets/building.jpg' alt='Davie Florida Autotmotive Service Building'/>
            </div> 
        </div>
        <div ref={animateRef} className='loc-title'>
          7548 W McNab Rd, North Lauderdale, FL 33068<br></br>
          Suite #05-07
        </div>
    </div>
  );
}

export default Location;
