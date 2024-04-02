import React, { useState, useEffect } from 'react';
import InfoCard from './InfoCard';
import './InfoSection.css';

const InfoSection = () => {
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
  
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false); 

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const containerTop = document.querySelector('.info-container').getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      // Check if the container is at least 80% visible
      setIsVisible(containerTop < windowHeight * 0.8);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const currentCard = infoCards[currentCardIndex];
  const prevCard = infoCards[(currentCardIndex - 1 + infoCards.length) % infoCards.length];
  const nextCard = infoCards[(currentCardIndex + 1) % infoCards.length];

  const handleNext = () => {
    setCurrentCardIndex((prevIndex) => (prevIndex + 1) % infoCards.length);
  };

  const handlePrevious = () => {
    setCurrentCardIndex((prevIndex) =>
      prevIndex === 0 ? infoCards.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className={`info-container ${isVisible ? 'visible' : ''}`}>
      <h2 className='question'>Why Choose Davie Battery?</h2>
      <div className='info-cards'>
        {windowWidth > 932 && <InfoCard className='prev-card' title={prevCard.title} content={prevCard.content} />}
        <InfoCard className='current-card' title={currentCard.title} content={currentCard.content} />
        {windowWidth > 932 && <InfoCard className='next-card' title={nextCard.title} content={nextCard.content} />}
      </div>

      <div className='navigation-buttons'>
        <button className='info-buttons' onClick={handlePrevious}>Previous</button>
        <button className='info-buttons' onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

export default InfoSection;