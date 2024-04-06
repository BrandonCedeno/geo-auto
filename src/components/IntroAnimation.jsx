import React from 'react';
import GearAnimation from './Animate-components/GearAnimation';
import WrenchAnimation from './Animate-components/WrenchAnimation';
import CarAnimation from './Animate-components/CarAnimation';
import BatteryAnimation from './Animate-components/BatteryAnimation';
import './styles/IntroAnimation.css'
import NameAnimation from './Animate-components/NameAnimation';
import { motion, AnimatePresence } from 'framer-motion';

function Intro ({onAnimationEnd}) {

return (
    <svg
    className='intro'
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 650.132 649.373"
  >
    <defs>
      <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur" stdDeviation={9} />
        <feFlood floodColor="#231f20" floodOpacity={0.55} />
        <feComposite in2="blur" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="drop-shadow-2" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur-2" stdDeviation={9} />
        <feFlood floodColor="#231f20" floodOpacity={0.55} />
        <feComposite in2="blur-2" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <filter id="drop-shadow-3" filterUnits="userSpaceOnUse">
        <feOffset />
        <feGaussianBlur result="blur-3" stdDeviation={9} />
        <feFlood floodColor="#231f20" floodOpacity={0.55} />
        <feComposite in2="blur-3" operator="in" />
        <feComposite in="SourceGraphic" />
      </filter>
      <style>
        {
          ".cls-1{stroke-width:.89486px}.cls-1,.cls-10,.cls-11,.cls-12,.cls-14,.cls-15,.cls-16,.cls-2,.cls-3,.cls-4,.cls-5,.cls-6,.cls-8,.cls-9{fill:#0c1426}.cls-1,.cls-11,.cls-12,.cls-16,.cls-17,.cls-18,.cls-19,.cls-21,.cls-22,.cls-3,.cls-5,.cls-6{stroke:#fff}.cls-1,.cls-10,.cls-11,.cls-12,.cls-16,.cls-18,.cls-19,.cls-25,.cls-26,.cls-28,.cls-3,.cls-5,.cls-8{stroke-linecap:round;stroke-linejoin:round}.cls-2{stroke:#4b5460}.cls-14,.cls-15,.cls-17,.cls-2,.cls-21,.cls-22,.cls-29,.cls-30,.cls-32,.cls-34,.cls-6,.cls-9{stroke-miterlimit:10}.cls-17,.cls-25,.cls-29,.cls-34,.cls-35{fill:#cfddf1}.cls-10,.cls-15,.cls-28,.cls-29{stroke:#cfddf1}.cls-30{stroke:#b61f24}.cls-21,.cls-30{fill:#b61f24}.cls-36{fill:#231f20}.cls-35,.cls-36,.cls-37,.cls-4,.cls-9{stroke-width:0}.cls-3{stroke-width:2.68457px}.cls-5{stroke-width:3.12081px}.cls-14,.cls-25,.cls-26,.cls-32,.cls-34,.cls-8,.cls-9{stroke:#0c1426}.cls-10,.cls-25{stroke-width:.75614px}.cls-18,.cls-19,.cls-26,.cls-28{fill:none}.cls-11{stroke-width:2.53059px}.cls-12{stroke-width:2.57882px}.cls-19{stroke-width:.5px}.cls-32{stroke-width:11.63314px}.cls-22,.cls-32,.cls-37{fill:#fff}.cls-21{stroke-width:.75px}.cls-41{display:none}.cls-16{stroke-width:2.513px}"
        }
      </style>
    </defs>
     <motion.g
     className='intro-anim'
     initial={{scale:0.7, opacity:1 }}
     animate={{ scale:0.2 , opacity:0, y:'-41%'  }}
     transition={{ duration: 1, delay:2 }}
     >
    <GearAnimation />

    <WrenchAnimation />

    <CarAnimation />

    <BatteryAnimation/>

    <NameAnimation />
    </motion.g>   
  </svg>
);

}
export default Intro;
