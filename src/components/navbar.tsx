import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
// import Logo from '../../public/images/infoblue.png'

const NavBar = () => {
  return (
    <Navbar className="nav-bg" fixed="top" expand="lg" style={{
      paddingTop: "30px"
    }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'white' }}>
          {/* <img width="50px" alt="logo" src={Logo} /> */}
          Infosys</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link style={{ color: 'white', marginLeft: "20px" }} href="#home">Careers</Nav.Link>
            <Nav.Link style={{ color: 'white', marginLeft: "20px" }} href="#link">Investigators</Nav.Link>
            <Nav.Link style={{ color: 'white', marginLeft: "20px" }} href="#link">Navigate your next</Nav.Link>
            <Nav.Link style={{ color: 'white', marginLeft: "20px" }} href="#link">Infosys knowledge institute</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar;