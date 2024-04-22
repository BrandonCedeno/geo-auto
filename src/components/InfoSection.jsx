import React, { useState, useRef } from 'react';
import InfoCard from './InfoCard';
import './styles/InfoSection.css';
import { useAnimation } from './useAnimation';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from 'swiper/modules';

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const InfoSection = () => {
  const animateRef = useAnimation();

  const infoCards = [
    {
      title: 'Certified Excellence',
      content: "Our mechanics undergo rigorous training and certification. We have complete confidence in our technicians' abilities and skills to make sure your concerns are taken care of.",
    },
    {
      title: 'Friendly Service',
      content: "At Geo's, we set standards in professionalism and service, but most importantly, we care. Expect a warm welcome and personalized attention. Our friendly team is here to assist you with any automotive needs, big or small.",
    },
    {
      title: 'Quality Workmanship',
      content: 'We believe in doing things right the first time. You can trust our staff to deliver quality repairs and maintenance. We take pride in our workmanship.',
    },
    {
      title: 'Transparent Pricing',
      content: "No surprises here! We provide honest estimates and explain every repair before starting work. Our goal is to ensure transparency in pricing and give you peace of mind. Trust Geo's for straightforward and fair pricing.",
    }
  ];
  
  return (
    <>
  <div className='info-container' ref={animateRef}>
    <img src='assets/mech.jpeg' alt='Geo Automotive Mechanic'/>
    <div className='question'>
      Why Choose Geo's?
    </div>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation
        pagination={{ clickable: true }}
        onSlideChange={(swiper) => console.log(`Slide index changed to: ${swiper.activeIndex}`)}
      >
        {infoCards.map((card, index) => (
          <SwiperSlide key={index}>
            <InfoCard className='cards' ref={animateRef} title={card.title} content={card.content} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

      <div className='about' id='about'>

        <div className='style-banner'>
        </div>

        <div className='about-content'>
          <h2>About Us</h2>
          <p> A family owned business setting a standard for excellent service, 
            committed in putting all of your concerns to rest. We sell batteries and remanufacture 
            alternators and starters. We also pride ourselves in our automotive repair 
            services. Our goal is to deliver our promise in revolutionizing the
            automotive industry! </p>
        </div>

        <img src='assets/Geo Graphic Design.png' className='about-img' ref={animateRef} />

        <div className='style-banner1'>
        </div>

      </div>
    </>
  );
};

export default InfoSection;
