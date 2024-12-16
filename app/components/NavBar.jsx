'use client';
import React from 'react'
//import Link from 'next/link'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

const NavBar = () => {

  return (
    <>
      {['lg'].map((expand) => (
        <Navbar key={expand} variant='light' fixed='top' expand={expand} className="tw-bg-white mb-3">
          <Container>
            <Navbar.Brand  href="/">jaiquez</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="ms-auto">
              <Nav.Link href="/" className='tw-text-white'>Home</Nav.Link>
              <NavDropdown  title="Work" id="basic-nav-dropdown">
                <NavDropdown.Item href="/work/bookblog">Book Blog</NavDropdown.Item>
                <NavDropdown.Item href="/work/l4d">GameSite</NavDropdown.Item>
                <NavDropdown.Item href="/work/crocs">Crocs</NavDropdown.Item>
                <NavDropdown.Item href="/work/riddles">Riddles</NavDropdown.Item>
                <NavDropdown.Item href="/work/flippo">Flippo</NavDropdown.Item>
                
              </NavDropdown>
              <Nav.Link  href="/music">Music</Nav.Link>
            </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default NavBar;
/*

<Navbar expand="lg" className="bg-body-tertiary justify-content">
        <Container>
          <Navbar.Brand  href="/">jaiquez</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <NavDropdown title="Work" id="basic-nav-dropdown">
                <NavDropdown.Item href="/work/bookblog">Book Blog</NavDropdown.Item>
                <NavDropdown.Item href="/work/l4d">GameSite</NavDropdown.Item>
                <NavDropdown.Item href="/work/crocs">Crocs</NavDropdown.Item>
                <NavDropdown.Item href="/work/riddles">Riddles</NavDropdown.Item>
                <NavDropdown.Item href="/work/flippo">Flippo</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="">Separated link</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link  href="/music">Music</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>


 <Nav.Link ><Link href="/home">Home</Link></Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item ><Link href="/work/bookblog">Book Blog</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href="/work/l4d">GameSite</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href="/work/crocs">Crocs</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href="/work/riddles">Riddles</Link></NavDropdown.Item>
              <NavDropdown.Item ><Link href="/work/flippo">Flippo</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="">Separated link</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link ><Link href="/work">Work</Link> </Nav.Link>
            */