import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavbarProducts() {
    return (
        <Navbar expand="lg" className="bg-body-tertiary products-navbar">
            <Container>
                <Navbar.Toggle aria-controls="products-navbar-nav" />
                <Navbar.Collapse id="products-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href='#indumentaria'>Indumentaria</Nav.Link>
                        <Nav.Link href='#vial'>Vial</Nav.Link>
                        <Nav.Link href='#auditivo'>Auditivo</Nav.Link>
                        <Nav.Link href='#anteojos'>Anteojos</Nav.Link>
                        <Nav.Link href='#altura'>Altura</Nav.Link>
                        <Nav.Link href='#guantes'>Guantes</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavbarProducts;