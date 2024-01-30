import React, { useEffect, useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";

export default function Košarica() {
  const [userData, setUserData] = useState({
    name: "",
    surname: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    zip: "",
  });
  const [quantity, setQuantity] = useState(0);
  const [cart, setCart] = useState([]);
  const [show, setShow] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [validated, setValidated] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    let data = localStorage.getItem("cart");
    if (data) {
      setCart(JSON.parse(data));
    }
  }, []);

  useEffect(() => {
    let newTotalPrice = cart.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    setTotalPrice(newTotalPrice);
  }, [cart]);

  async function handleSubmit(e) {
    e.preventDefault();
    console.log(userData);
    console.log(cart);
    const response = await fetch(
      "https://eipf2exv0c.execute-api.us-east-1.amazonaws.com/sincek/invoice",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          // Convert the JavaScript object to a JSON string
          userData: userData,
          cart: cart,
          totalPrice: totalPrice,
          date: new Date().toISOString(), // Convert the date to a string that can be sent in JSON
        }),
      }
    );
    //eslint-disable-next-line
    const data = await response.json();
    clearCart();
    setShow(false);
    setShowAlert(true);
  }

  const addQuantity = () => {
    setQuantity(quantity + 1);
  };

  const removeQuantity = () => {
    if (quantity === 0) {
      return;
    }
    setQuantity(quantity - 1);
  };

  function clearCart() {
    localStorage.removeItem("cart");
    setCart([]);
  }

  function handleShow() {
    setShow(true);
  }

  function handleClose() {
    setShow(false);
    setValidated(false);
  }

  return (
    <div>
      <Navbar />
      {showAlert && (
        <Alert
          className="position-absolute w-100 z-5"
          variant="success"
          onClose={() => setShow(false)}
          dismissible
        >
          Pdf račun uspješno poslan na email adresu: {userData.email}
        </Alert>
      )}
      <p className="text-center display-4" style={{ color: "#73F28F" }}>
        {cart.length === 0 && "Košarica je prazna"}
      </p>
      {cart &&
        cart.map((item, index) => {
          return (
            <Row
              key={index}
              className="d-flex justify-content-between align-items-center text-center"
            >
              <Col>
                <img
                  src={"data:image/webp;base64," + item.imageUrl}
                  alt={item.name}
                  className="img-fluid rounded-1 shadow-lg"
                  width={"30%"}
                />
                <p className="fs-4">{item.name}</p>
              </Col>
              <Col>
                <p className="fs-4">Količina: {item.quantity}</p>
                <p className="fs-4">
                  Ukupna cijena: {item.price * item.quantity}
                </p>
              </Col>
              <Col>
                <div className="d-flex gap-4 justify-content-center ">
                  <img
                    src="minus.png"
                    className="border p-2 rounded-5"
                    onClick={removeQuantity}
                    alt="minus"
                  />
                  <img
                    src="plus.png"
                    className="border p-2 rounded-5"
                    onClick={addQuantity}
                    alt="plus"
                  />
                </div>
              </Col>
            </Row>
          );
        })}

      <Row>
        <Col md={10} className="d-flex justify-content-end m-5">
          <button onClick={clearCart} className="btn btn-danger">
            Očisti košaricu
          </button>
        </Col>
      </Row>

      <hr></hr>

      <Row className="d-flex text-center justify-content-center align-items-center">
        <Col md={4}>
          <p>Ukupno:</p>
        </Col>
        <Col md={4}></Col>
        <Col md={4}>
          <p>{totalPrice && totalPrice}</p>
        </Col>
      </Row>

      <hr></hr>

      <Row>
        <Col md={10} className="d-flex justify-content-end m-5">
          <button onClick={handleShow} className="btn btn-success">
            Potvrdi narudžbu
          </button>
        </Col>
      </Row>

      {/* Modal */}

      {/* Modal */}
      <Modal show={show} onHide={handleClose} className="modal-xl">
        <Modal.Body className="p-0">
          <Row className="d-flex m-3">
            <Col
              lg={6}
              sm={12}
              className="row justify-content-center align-items-center"
            >
              <img src="delivery.webp" alt="delivery" className="img-fluid" />
            </Col>
            <Col lg={6} sm={12} className="mt-4">
              <h5 className="card-title">Dostava</h5>
              <p>
                Besplatna dostava se vrši u krugu 15 kilometara od nas, a za sve
                ostale narudžbe, potrebno je osobno podići robu.{" "}
              </p>
              <hr />
              <div className="d-flex">
                <Form noValidate validated={validated}>
                  <Row className="mb-3">
                    <Form.Group
                      className="d-flex flex-column w-100"
                      as={Col}
                      md="4"
                      controlId="validationCustom01"
                    >
                      <Form.Label>Ime</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="First name"
                        defaultValue="Mark"
                        value={userData.name}
                        onChange={(e) =>
                          setUserData({ ...userData, name: e.target.value })
                        }
                      />
                      <Form.Label>Prezime</Form.Label>
                      <Form.Control
                        required
                        type="text"
                        placeholder="Last name"
                        defaultValue="Otto"
                        value={userData.surname}
                        onChange={(e) =>
                          setUserData({ ...userData, surname: e.target.value })
                        }
                      />
                      <Form.Control.Feedback>Odlično!</Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-between">
                    <Form.Group
                      as={Col}
                      md="8"
                      controlId="validationCustom03"
                      className="w-50"
                    >
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Email"
                        value={userData.email}
                        onChange={(e) =>
                          setUserData({ ...userData, email: e.target.value })
                        }
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Unesite važeći email
                      </Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group
                      as={Col}
                      md="8"
                      controlId="validationCustom03"
                      className="w-50"
                    >
                      <Form.Label>Kontakt broj</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Phone number"
                        value={userData.phone}
                        onChange={(e) =>
                          setUserData({ ...userData, phone: e.target.value })
                        }
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Unesite važeći broj telefona
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <Row className="mb-3 d-flex justify-content-between">
                    <Form.Group
                      as={Col}
                      md="8"
                      controlId="validationCustom03"
                      className="w-25"
                    >
                      <Form.Label>Grad</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="City"
                        value={userData.city}
                        onChange={(e) =>
                          setUserData({ ...userData, city: e.target.value })
                        }
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Unesite važeći grad
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="8"
                      controlId="validationCustom04"
                      className="w-25"
                    >
                      <Form.Label>Županija</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="State"
                        value={userData.state}
                        onChange={(e) =>
                          setUserData({ ...userData, state: e.target.value })
                        }
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Unesite važeću Županiju
                      </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group
                      as={Col}
                      md="8"
                      controlId="validationCustom05"
                      className="w-25"
                    >
                      <Form.Label>Poštanski broj</Form.Label>
                      <Form.Control
                        type="text"
                        placeholder="Zip"
                        value={userData.zip}
                        onChange={(e) =>
                          setUserData({ ...userData, zip: e.target.value })
                        }
                        required
                      />
                      <Form.Control.Feedback type="invalid">
                        Unesite važeči poštanski broj
                      </Form.Control.Feedback>
                    </Form.Group>
                  </Row>

                  <hr></hr>

                  <Form.Group className="mb-3">
                    <Form.Check
                      required
                      label="Agree to terms and conditions"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                    />
                  </Form.Group>
                  <div className="d-flex bottom-0 justify-content-between">
                    <button
                      className=" m-4 w-25 rounded-5"
                      style={{ backgroundColor: "#F28F8F" }}
                      onClick={handleClose}
                    >
                      Zatvori
                    </button>
                    <button
                      className="m-4 w-25 rounded-5"
                      onClick={handleSubmit}
                      type="submit"
                      style={{ backgroundColor: "#73F28F" }}
                    >
                      U košaricu
                    </button>
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Modal.Body>
      </Modal>

      <Footer />
    </div>
  );
}
