import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../assets/logo-chavez.png'
function NavbarProducts() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary products-navbar">
            <Container>
                <Navbar.Toggle aria-controls="products-navbar-nav" />
                <Navbar.Collapse id="products-navbar-nav">
                    <Nav className="me-auto">
                        <NavDropdown title="Categorias" id="products-nav-dropdown">
                            <NavDropdown.Item href="#indumentaria">
                                Indumentaria
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#vial">
                                Vial
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#auditivo">
                                Auditivo
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#anteojos">
                                Anteojos
                            </NavDropdown.Item>
                            <NavDropdown.Item href="#altura">
                                Altura
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarProducts;