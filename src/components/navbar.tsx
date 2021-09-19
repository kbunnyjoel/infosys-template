import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'

const NavBar = (props: any) => {
  const { changeSelection } = props;

  return (
    <Navbar className="nav-bg" fixed="top" expand="lg" style={{
      paddingTop: "30px"
    }}>
      <Container>
        <Navbar.Brand href="#home" style={{ color: 'white' }}>
          Infosys
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Nav >
            <Nav.Link onClick={() => changeSelection(0)}
              style={{ color: 'white', marginLeft: "20px" }}>Careers</Nav.Link>
            <Nav.Link onClick={() => changeSelection(1)}
              style={{ color: 'white', marginLeft: "20px" }}>Investigators</Nav.Link>
            <Nav.Link onClick={() => changeSelection(2)}
              style={{ color: 'white', marginLeft: "20px" }}>Navigate your next</Nav.Link>
            <Nav.Link onClick={() => changeSelection(3)}
              style={{ color: 'white', marginLeft: "20px" }}>Infosys knowledge institute</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  )
}

export default NavBar;