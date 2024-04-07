import React, { useState } from 'react';
import InfoCard from './InfoCard';
import './styles/InfoSection.css';
import { useAnimation } from './useAnimation';

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

const InfoSection = () => {
  const animateRef = useAnimation();

  const infoCards = [
    {
      title: 'Certified Excellence',
      content: 'Our mechanics undergo rigorous training and certification...',
    },
    {
      title: 'Friendly Service',
      content: 'At Davie Battery, we’re not just about fixing cars; we’re about building relationships. Expect a warm welcome and personalized attention. Our friendly team is here to assist you with any automotive needs, big or small.',
    },
    {
      title: 'Quality Workmanship',
      content: 'We believe in doing things right the first time. You can trust our mechanics to deliver quality repairs and maintenance. Whether it’s engine diagnostics, brake repairs, or suspension work, we take pride in our workmanship.',
    },
    {
      title: 'Transparent Pricing',
      content: 'No surprises here! We provide honest estimates and explain every repair before starting work. Our goal is to ensure transparency in pricing and give you peace of mind. Trust Davie Battery for straightforward and fair pricing.',
    }
  ];
  
  const [swiper, setSwiper] = useState(null);

  const handleNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };

  const handlePrevious = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  return (
    <>
      <div className='info-container'>
      <h2 className='question'>Why Choose Geo's?</h2>
          <Swiper
            onSwiper={setSwiper}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
            loop={false} // Change this line
            touchRatio={0.5}
          >
          {infoCards.map((card, index) => (
            <SwiperSlide key={index}
            >
              <div className='info-card'>
                <InfoCard title={card.title} content={card.content} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className='swiper-button-prev' onClick={handlePrevious}></button>
        <button className='swiper-button-next' onClick={handleNext}></button>
      </div>

      <div className='about'>
        <div className='style-banner'>
        </div>
        <div className='about-content' ref={animateRef}>
          <h2>About Us</h2>
          <p>A family owned business setting a standard for excellent service
            and committed to every customer. We sell batteries, remanufacture
            and rebuild alternators and starters, and provide automotive repair 
            services. Our goal is to deliver our promise in revolutionizing the
            automotive industry. </p>
        </div>
        <img src='assets/mech2.jpg' className='about-img' ref={animateRef} />
        <div className='style-banner1'>
        </div>

      </div>
    </>
  );
};

export default InfoSection;
