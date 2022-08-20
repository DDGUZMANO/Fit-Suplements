import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';


function CollapsibleExample() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Fit Suplements</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Artículos</Nav.Link>
            <Nav.Link href="#pricing">Investigación</Nav.Link>
            <NavDropdown title="Suplementos" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Proteínas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Aumentadores de masa muscular
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Quemadores de grasas</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Proximamente en stock
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Calculadora de IMM</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Calculadora de proteínas
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;