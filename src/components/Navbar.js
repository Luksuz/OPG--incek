import { useState, useEffect } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
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
            <Container className='d-flex justify-content-between'>
                <Navbar.Brand onClick={() => navigate("/")} className='fs-1'>OPG Šincek</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto d-flex align-items-end fs-5">
                        <Nav.Link as={Link} to="/">Početna</Nav.Link>
                        <Nav.Link as={Link} to="/ONama">O nama</Nav.Link>
                        <Nav.Link as={Link} to="/Kontakt">Kontakt</Nav.Link>
                        <Nav.Link as={Link} to="/Ponuda">Ponuda</Nav.Link>
                        <Nav.Link as={Link} to="/Kosarica" className=''>
                            <img src="shopping-cart.png" alt="cart" />
                            <span className="cart-icon">{quantity}</span>
                    </Nav.Link>
                    </Nav>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}
