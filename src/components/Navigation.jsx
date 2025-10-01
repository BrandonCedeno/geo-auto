import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Button } from 'react-bootstrap';
import { ReactComponent as CarLogoSvg } from './carLogoSVG';
import {motion} from 'framer-motion';
import './styles/Navigation.css';


const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleHomeClick = () => {
    window.scrollTo(0, 0);
    toggleSidebar();
  };

  const logoClick = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 932); 
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const sidebarVariants = {
    open: { width: '10em', opacity: 1 },
    closed: { width: 0, opacity: 0 },
  };

  return (
    <> 
      {(isMobile && !isOpen) || !isMobile ? ( // Render navbar for mobile when sidebar is not open, or always for desktop
        <Navbar className="navbar" expand="lg" fixed="top">
          <Button variant="dark" onClick={toggleSidebar} className='nav-button-custom' id='custom'>
            {isOpen ? 'X' : '☰'}
          </Button>
          <Navbar.Brand className="navbar-brand">
            <CarLogoSvg  onClick={logoClick}/>
          </Navbar.Brand>
          <div style={{ flexGrow: 1 }}></div>
        </Navbar>
      ) : null}

      <motion.div 
      className={`sidebar ${isOpen ? 'open' : ''}`}
      variants={sidebarVariants} // Apply animation variants
      initial="closed" // Initial state
      animate={isOpen ? 'open' : 'closed'} // Animate based on isOpen
      transition={{duration: .3}}
      >
         {isMobile && isOpen && (<Button variant="dark" onClick={toggleSidebar} className='mobile-nav-button'>
            {isOpen ? 'X' : ''}
          </Button>)}
        <Nav className="flex-column">
          <Nav.Link className="sidebar-link" onClick={handleHomeClick} href="#home">Home</Nav.Link>
          <Nav.Link className="sidebar-link" onClick={toggleSidebar} href="#about">About Us</Nav.Link>
          <Nav.Link className="sidebar-link" onClick={toggleSidebar} href="#location">Mobile Service</Nav.Link>
          <Nav.Link className="sidebar-link" onClick={toggleSidebar} href="#contact">Contact</Nav.Link>
        </Nav>
      </motion.div>
    </>
  );
};

export default NavigationBar;
