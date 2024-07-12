import { NavDropdown } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import logo from '../assets/logo-chavez.png'


function NavbarComponent() {

    return (
        <>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Nav className="me-auto flex">
                        <img src={logo} alt="Logo Chavez" style={{width:"110px"}}/>
                    </Nav>
                    <Nav.Link className='nav-link' as={Link} to='/'>Inicio</Nav.Link>
                    <NavDropdown id="basic-nav-dropdown" title="Productos">
                        <NavDropdown.Item as={Link} to='/anclajesujecioncarga'>Anclaje, sujecion y carga</NavDropdown.Item>
                        <NavDropdown.Item as={Link} to='/eppseguridadpersonal'>EPP Seguridad personal</NavDropdown.Item>
                    </NavDropdown>
                </Container>
            </Navbar>
        </>
    );
}

export default NavbarComponent;