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
        <p className="card-text">{price}</p>
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
        <Modal.Body className="p-0">
          <div className="d-flex flex-row flex-md-col">
            <div className="row justify-content-center align-items-center me-3">
              <img
                src={"data:image/webp;base64," + imageUrl}
                alt={name}
                className="img-fluid"
              />
            </div>
            <div className="mt-4">
              <h5 className="card-title">{name}</h5>
              {description}
              <hr />
              <div className="d-flex">
                <Form noValidate>
                  <Row className="mb-3 d-flex justify-content-between">
                    <Form.Group
                      as={Col}
                      md="8"
                      controlId="validationCustom03"
                      className="w-50"
                    >
                      <Form.Label>Quantity</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Quantity"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Quantity
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>
                  <div className="mb-3">
                    <button
                      className="position-absolute m-4 w-25 rounded-5 bottom-0 start-0 green-button"
                      style={{ backgroundColor: "#F28F8F" }}
                      onClick={handleClose}
                    >
                      Close
                    </button>
                    <button
                      className="position-absolute m-4 w-25 rounded-5 bottom-0 end-0 green-button"
                      onClick={addToCart}
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </motion.div>
  );
}
