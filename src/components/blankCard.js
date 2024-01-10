import React, { useState } from "react";
import { Modal, Form, Row, Col, Button, InputGroup } from "react-bootstrap";
import { motion } from "framer-motion";
import { uploadImage } from "../APIUtils/imageAPIs";
import "../styles.css";

export default function BlankCard() {
  const [show, setShow] = useState(false);
  const [imageData, setImageData] = useState({
    image: null,
    name: "",
    description: "",
    price: "",
  });

  const handleSetImageName = (e) => {
    setImageData({ ...imageData, name: e });
  };

  const handleSetImagePrice = (e) => {
    setImageData({ ...imageData, price: e });
  };

  const handleSetImageDescription = (e) => {
    setImageData({ ...imageData, description: e });
  };

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
      className="card shadow-lg m-0"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.2 } }}
      style={{ width: "18rem" }}
    >
      <img
        src="./placeholder-plant.png"
        alt="placeholder plant"
        className="card-img-top img-fluid"
      />

      <div className="card-body">
        <h5 className="card-title">ime sadnice</h5>
        <hr />
        <p className="card-text">opis sadnice</p>
        <hr />
        <p className="card-text">cijena sadnice</p>
        <Button variant="primary" onClick={handleShow}>
          Dodaj sadnicu
        </Button>
      </div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} className="modal-xl" style={{height: "50%"}}>
    <Modal.Body className="p-0">
        {/* Add onSubmit event handler to the Form */}
        <Form noValidate encType="multipart/form-data" onSubmit={(e) => {
            e.preventDefault();
            uploadImage(imageData, e.target.image.files[0]);
        }}>
            {/* Update InputGroup for file upload */}
            <InputGroup>
                <Form.Control type="file" name="image" accept="image/*" />
            </InputGroup>

            <Row className="mb-3 d-flex justify-content-between">
                  <Form.Group
                    as={Col}
                    md="8"
                    controlId="validationCustom03"
                    className="w-50"
                  >
                    <Form.Label>Naziv sadnice</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="naziv sadnice"
                      value={imageData.name}
                      onChange={(e) => handleSetImageName(e.target.value)}
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Quantity
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="8"
                    controlId="validationCustom03"
                    className="w-50"
                  >
                    <Form.Label>Opis</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Opis"
                      value={imageData.description}
                      onChange={(e) =>
                        handleSetImageDescription(e.target.value)
                      }
                      required
                    />
                    <Form.Control.Feedback type="invalid">
                      Quantity
                    </Form.Control.Feedback>
                  </Form.Group>

                  <Form.Group
                    as={Col}
                    md="8"
                    controlId="validationCustom03"
                    className="w-50"
                  >
                    <Form.Label>Cijena sadnice</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Price"
                      value={imageData.price}
                      onChange={(e) => handleSetImagePrice(e.target.value)}
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
                {/* Change type to "submit" for the Submit button */}
                <button
                  className="position-absolute m-4 w-25 rounded-5 bottom-0 end-0 green-button"
                  type="submit"
                >
                  Submit
                </button>
            </div>
        </Form>
    </Modal.Body>
</Modal>

    </motion.div>
  );
}
