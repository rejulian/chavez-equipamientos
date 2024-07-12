import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-chavez.png'


function NavbarComponent() {

    return (
        <>
            <Navbar expand='lg' bg="light" data-bs-theme="light">
                <Container>
                    <img src={logo} alt="Logo Chavez" style={{width:"110px"}}/>
                    <Navbar.Toggle aria-controls="products-navbar-nav" />
                    <Navbar.Collapse>
                        <Nav className='me-auto'>
                            <Nav.Link as={Link} to='/anclajesujecioncarga'>Anclaje Sujecion y Carga</Nav.Link>
                            <Nav.Link as={Link} to='/eppseguridadpersonal'>EPP Seguridad Personal</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;