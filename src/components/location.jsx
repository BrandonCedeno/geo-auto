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
                allow='accelerometer'
                loading="lazy"
                allowFullScreen
                src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyAl40eKrXbW3dlQ5QQc0VKTIe_1_5z_CNI&q=${encodeURIComponent(address)}`}
            >
            </iframe>
            <div className='building'>
            <iframe
                className='building-street'
                style={{border:0}}
                allow='accelerometer'
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed?pb=!4v1713741501744!6m8!1m7!1s6u91YiBhiI35OtrkQXPQqQ!2m2!1d26.20709051663714!2d-80.22670713868786!3f177.18969313032937!4f-0.44573997061368686!5f0.7820865974627469"
            >
            </iframe>
            </div> 
        </div>
        <div ref={animateRef} className='loc-title'>
          7548 W McNab Rd, North Lauderdale, FL 33068<br></br>
          Suite #A05-07
        </div>
    </div>
  );
}

export default Location;
