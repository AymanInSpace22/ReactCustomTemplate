import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Navigation() {
  return (
    <Navbar  variant="dark" expand="md" className='idk'>
      <Container >
        <Navbar.Brand as={Link} to="/home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link as={Link} to="/imageGeneration">ImageGen</Nav.Link> */}
            <Nav.Link as={Link} to="/chatApi">Chat</Nav.Link>
            <Nav.Link as={Link} to="/audioGenerator">Audible</Nav.Link>
            {/* <Nav.Link as={Link} to="/shortStoryGenerator">StoryGen</Nav.Link> */}
            <Nav.Link as={Link} to="/speechToText">Speech</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>

            {/* Add more navigation links here */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Navigation;
