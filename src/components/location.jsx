import React from 'react';
import './styles/location.css'
import { useAnimation } from './useAnimation';

const Location = () => {
  const titleRef = useAnimation();
  const bodyRef = useAnimation();
  const imgRef = useAnimation();
  return (
    <div className='loc-container' id = 'location'>

        <div ref={titleRef} className='loc-title'>
          We offer mobile service, we come to you!
        </div>

          <div className='loc-content'>
            <div ref={bodyRef} className='loc-body'>
            We provide service calls and have become completely mobile! Make an appointment with us and we will schedule
              you to our soonest available date. Our standards and professionalism has taken no toll whatsoever. 
              Our goal will always be to provide the most convenient and reliable service possible. 
            </div>
            <div>
                <img src='assets/cartoony Hispanic me.png' className='loc-img' ref={imgRef}></img>
            </div> 
          </div>

    </div>
  );
}

export default Location;