import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import CartWidget from './CartWidget ';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">NatúYe</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/">Inicio</Nav.Link>
          <Nav.Link href="/productos">Productos</Nav.Link>
          <Nav.Link href="/pedidos">Pedidos</Nav.Link>
          <Nav.Link href="/contactanos">Contáctanos</Nav.Link>
        </Nav>
      </Navbar.Collapse>
      <CartWidget />
    </Navbar>
  );
};

export default NavigationBar;