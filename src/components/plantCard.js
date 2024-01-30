import React, { useState } from "react";
import { Modal, Form, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { deleteImage } from "../APIUtils/imageAPIs";
import "../styles.css";

export default function PlantCard({ imageId, imageUrl, name, price, description, token }) {
  const [quantity, setQuantity] = useState(null);
  const [show, setShow] = useState(false);


  

  function addToCart(e) {
    e.preventDefault();
    console.log(quantity + "added to basket");
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    const newCartData = [
      ...cartData,
      { name: name, quantity: quantity, price: price, imageUrl: imageUrl },
    ];
    localStorage.setItem("cart", JSON.stringify(newCartData));
    setShow(false);
  }

  const handleShow = (e) => {
    e.preventDefault();
    setShow(true);
  };

  const handleClose = (e) => {
    e.preventDefault();
    setShow(false);
  };

  return (
    <motion.div
      className="card shadow-lg"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      style={{ width: "18rem" }}
    >
      <img
        src={"data:image/webp;base64," + imageUrl}
        className="card-img-top img-fluid"
        alt={name}
        onClick={handleShow}
      />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <hr />
        <p className="card-text green-shadow">{description}</p>
        <hr />
        <p className="card-text">{`${price}€`}</p>
        {token && (
          <div className="d-flex">
            <button
              className="btn btn-outline-danger"
              onClick={() => deleteImage(imageId, token)}
            >
              Delete
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} className="modal-xl">
        <Modal.Body className="p-5">
          <Row>
            <Col md={5}>
              <img
                src={"data:image/webp;base64," + imageUrl}
                alt={name}
                className="img-fluid w-100"
              />
            </Col>
            <Col md={7}>
              <h1 className="card-title mb-2">{name}</h1>
              {description}
              <hr />
                <Form className="d-flex flex-column w-100 " noValidate>
                  <Row className="mb-3 d-flex justify-content-between">
                    <Form.Group
                      as={Col}
                      md="8"
                      controlId="validationCustom03"
                      className="w-50"
                    >
                      <Form.Label>Količina</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Količina"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Quantity
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <div className="d-flex justify-content-between w-100">
                    <button
                      className=" w-25 rounded-5"
                      style={{ backgroundColor: "#F28F8F" }}
                      onClick={handleClose}
                    >
                      Zatvori
                    </button>
                    <button
                      className=" w-25 rounded-5"
                      onClick={addToCart}
                      type="submit"
                      style={{ backgroundColor: "#73F28F" }}
                    >
                      U košaricu
                    </button>
                  </div>
                </Form>
            </Col>
            </Row>
        </Modal.Body>
      </Modal>
    </motion.div>
  );
}
