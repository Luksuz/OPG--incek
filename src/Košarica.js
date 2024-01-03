import React, { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



export default function Košarica() {
    const [quantity, setQuantity] = useState(0);
    const addQuantity = () => {
        setQuantity(quantity + 1);
    }

    const removeQuantity = () => {
        if (quantity === 0) {
            return;
        }
        setQuantity(quantity - 1);
    };

    return (
        <div>
            <Navbar />
            <Row className="d-flex justify-content-between aling-items-center text-center">
                <Col>
                    <img src="https://plus.unsplash.com/premium_photo-1664304105790-4e016cb1337e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8dHVsaXB8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&w=700&q=60" alt="plant" className="img-fluid" width={"30%"} />
                    <p>Tulip</p>
                </Col>
                <Col>
                    <p>Quantity: {quantity}</p>
                    <p>Price: 100kn</p>
                </Col>
                <Col>
                <div className="d-flex gap-4 justify-content-center ">
                    <img src="minus.png" className="border p-2" onClick={removeQuantity}/>
                    <img src="plus.png" className="border p-2" onClick={addQuantity}/>
                </div>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}