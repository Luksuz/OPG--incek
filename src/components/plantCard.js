import React, { useState } from "react";
import { Modal, Button, Form, Row, Col, InputGroup } from "react-bootstrap";
import { motion } from "framer-motion";
import "../styles.css"

export default function PlantCard({ imageUrl, name, price, description }) {
  const [show, setShow] = useState(false);
  const [validated, setValidated] = useState(false);

  const handleShow = () => {
    console.log("show");
    setShow(true);
  };

  const handleClose = () => {
    console.log("close");
    setShow(false);
  };

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
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
        src={imageUrl}
        className="card-img-top img-fluid"
        alt={name}
        onClick={handleShow}
      />

      <div className="card-body">
        <h5 className="card-title">{name}</h5>
        <hr />
        <p className="card-text">{description}</p>
        <hr />
        <p className="card-text">{price}</p>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} className="modal-xl">

        <Modal.Body className="p-0">
          <div className="d-flex flex-row flex-md-col">
            <div className="row justify-content-center align-items-center me-3">
              <img src={imageUrl} alt={name} className="img-fluid" />
            </div>
            <div className="mt-4">
            <h5 className="card-title">{name}</h5>
              {description}
            <hr />
            <div className="d-flex">
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group className="d-flex flex-column w-100" as={Col} md="4" controlId="validationCustom01">
                    <Form.Label >First name</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="First name"
                      defaultValue="Mark"
                    />
                     <Form.Label>Last name</Form.Label>
                     <Form.Control
                      required
                      type="text"
                      placeholder="Last name"
                      defaultValue="Otto"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                 
                  
                </Row>

                <Row className="mb-3 d-flex justify-content-between">
                  <Form.Group as={Col} md="8" controlId="validationCustom03" className="w-50">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="text" placeholder="Email" required />
                    <Form.Control.Feedback type="invalid">
                      Your email adress
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group as={Col} md="8" controlId="validationCustom03" className="w-50">
                    <Form.Label>Phone number</Form.Label>
                    <Form.Control type="text" placeholder="Phone number" required />
                    <Form.Control.Feedback type="invalid">
                      Your phone number
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>



                <Row className="mb-3 d-flex justify-content-between">
                  <Form.Group as={Col} md="8" controlId="validationCustom03" className="w-25">
                    <Form.Label>City</Form.Label>
                    <Form.Control type="text" placeholder="City" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid city.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="8" controlId="validationCustom04" className="w-25">
                    <Form.Label>State</Form.Label>
                    <Form.Control type="text" placeholder="State" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid state.
                    </Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="8" controlId="validationCustom05" className="w-25">
                    <Form.Label>Zip</Form.Label>
                    <Form.Control type="text" placeholder="Zip" required />
                    <Form.Control.Feedback type="invalid">
                      Please provide a valid zip.
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>


                

                <hr></hr>

                <Row className="mb-3 d-flex justify-content-between">
                  <Form.Group as={Col} md="8" controlId="validationCustom03" className="w-50">
                    <Form.Label>Quantity</Form.Label>
                    <Form.Control type="text" placeholder="Quantity" required />
                    <Form.Control.Feedback type="invalid">
                      Quantity
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>


                <Form.Group className="mb-3">
                  <Form.Check
                    required
                    label="Agree to terms and conditions"
                    feedback="You must agree before submitting."
                    feedbackType="invalid"
                  />
                </Form.Group>
                <button className="position-absolute m-4 w-25 rounded-5 bottom-0 start-0 green-button" style={{backgroundColor: "#F28F8F"}} onClick={handleClose}>Close</button>
                <button className="position-absolute m-4 w-25 rounded-5 bottom-0 end-0 green-button" type="submit">Submit</button>
              </Form>
            </div>
            </div>

          </div>
        </Modal.Body>
      </Modal>
    </motion.div>
  );
}
