import React, { useState } from 'react';
import { Navbar, Nav, Button, NavbarBrand } from 'react-bootstrap';
import { ReactComponent as CarLogoSvg } from './carLogoSVG';
import './Navigation.css';


const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  const handleHomeClick = () => {
    window.scrollTo(0, 0);
    toggleSidebar();
  };

  return (
    <> 
      <Navbar className="navbar" expand="lg" fixed="top">
        <Button variant="dark" onClick={toggleSidebar} className='nav-button-custom' id='custom'>
          {isOpen ? 'X' : '☰'}
        </Button>
        <Navbar.Brand className="navbar-brand">
          <CarLogoSvg />
        </Navbar.Brand>
        <div style={{flexGrow: 1}}></div>
      </Navbar>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Nav className="flex-column">
          <Nav.Link className="sidebar-link" onClick={handleHomeClick} href="#home">Home</Nav.Link>
          <Nav.Link className="sidebar-link" onClick={toggleSidebar} href="#about">About Us</Nav.Link>
          <Nav.Link className="sidebar-link" onClick={toggleSidebar} href="#location">Location</Nav.Link>
          <Nav.Link className="sidebar-link" onClick={toggleSidebar} href="#contact">Contact</Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default NavigationBar;
