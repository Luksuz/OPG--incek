import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import "../styles.css";

export default function NavigationBar() {
    const [quantity, setQuantity] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        let cartItems = 0;
        let cart = JSON.parse(localStorage.getItem("cart"));
        if (cart) {
            cart.forEach((item) => {
                cartItems += Number(item.quantity);
            });
        }
        setQuantity(cartItems);
    }, []);


    return (
        <Navbar collapseOnSelect expand="md" className="shadow sticky-top mb-5" style={{background: "#73F28F"}}>
            <Container className='d-flex'>

                <Navbar.Brand onClick={() => navigate("/")} className='d-flex align-items-center w-75'>
                    <img src="logo.png" alt="logo" className='logo img-fluid' width={"10%"}/>
                    <h1>Vrtne sadnice Šincek</h1>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className='ms-5 align-items-center w-100'>
                    <Nav className="me-auto d-flex align-items-center fs-4">
                        <Nav.Link as={Link} to="/">Početna</Nav.Link>
                        <Nav.Link as={Link} to="/ONama">O{" "}nama</Nav.Link>
                        <Nav.Link as={Link} to="/Kontakt">Kontakt</Nav.Link>
                        <Nav.Link as={Link} to="/Ponuda">Ponuda</Nav.Link>
                        <Nav.Link as={Link} to="/Kosarica">
                            <img src="shopping-cart.png" alt="cart" />
                    </Nav.Link>
                    </Nav>
                   
                </Navbar.Collapse>

            </Container>
        </Navbar>
    );
}
