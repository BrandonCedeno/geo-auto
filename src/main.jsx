import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import HomePage from './components/HomePage';
import Intro from './components/IntroAnimation';
import './index.css';

function Main() {
  const [isIntroDone, setIsIntroDone] = useState(false);
  const [isFadeDone, setIsFadeDone] = useState(false);

  useEffect(() => {
    // Set a timer to mark intro as done after the animation duration
    const introTimer = setTimeout(() => {
      setIsIntroDone(true);
    }, 2700);

    // Set another timer to start the fade-out effect earlier
    const fadeOutTimer = setTimeout(() => {
      setIsFadeDone(true);
    }, 2200); 

    return () => {
      clearTimeout(introTimer);
      clearTimeout(fadeOutTimer);
    };
  }, []);
  return (
    <div>
      <div className= 'intro' style={{
        animation: isFadeDone ? 'fadeOut 1s linear forwards' : 'none',
        zIndex: isIntroDone ? 0 : 4
      }}>
      {isIntroDone ? null : <Intro />}
      </div>
      <HomePage />
    </div>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
  document.getElementById('root')
);
