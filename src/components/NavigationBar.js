import React from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .navbar { background-color: black; }
  a, .navbar-nav, .navbar-light .nav-link {
    color: red;
    font-siz:2.2em;
    &:hover { color: red; }
  }
  .navbar-brand {
    font-size: 2.2em;
    color: red;
    &:hover { color: red; }
  }
  .form-center {
    position: absolute !important;
    left: 25%;
    right: 25%;
    color: red;
  }
 
`

export const NavigationBar = () => (
  <Styles>
    <Navbar expand="lg">
      <Navbar.Brand href="/"> </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Form className="form-center">
        <h1>Navigation Between The Pages</h1>
      </Form>
        
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Item><Nav.Link href="/">Page 1</Nav.Link></Nav.Item> 
          <Nav.Item><Nav.Link href="/Two">Page 2</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/Three">Page 3</Nav.Link></Nav.Item>
          <Nav.Item><Nav.Link href="/Four">Page 4</Nav.Link></Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  </Styles>
)