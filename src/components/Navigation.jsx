import React, { useState } from 'react';
import { Navbar, Nav, Button, NavbarBrand } from 'react-bootstrap';
import { ReactComponent as CarLogoSvg } from './carLogoSVG';
import './Navigation.css';


const NavigationBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen(!isOpen);

  return (
    <> 
      <Navbar className="navbar" expand="lg" fixed="top">
        <Button variant="dark" onClick={toggleSidebar} className='nav-button-custom'>
          {isOpen ? 'X' : '☰'}
        </Button>
        <Navbar.Brand className="navbar-brand">
          <CarLogoSvg />
        </Navbar.Brand>
        <div style={{flexGrow: 1}}></div>
      </Navbar>
      <div className={`sidebar ${isOpen ? 'open' : ''}`}>
        <Nav className="flex-column">
          <Nav.Link className="sidebar-link" href="#home">Home</Nav.Link>
          <Nav.Link className="sidebar-link" href="#features">Features</Nav.Link>
          <Nav.Link className="sidebar-link" href="#pricing">Pricing</Nav.Link>
          <Nav.Link className="sidebar-link" href="#contact">Contact</Nav.Link>
        </Nav>
      </div>
    </>
  );
};

export default NavigationBar;
