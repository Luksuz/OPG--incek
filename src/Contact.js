import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import "./styles.css";

function FormExample() {
  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const styles = {
    backgroundColor: '#73F28F',
  }

  return (
    <div>
    <Navbar />
    <Row className='d-flex justify-content-center'>
      <Col lg={5}>
    <Form noValidate validated={validated} onSubmit={handleSubmit} className='container d-flex flex-column bordered rounded-5 w-sm-100'>
    <p className='fs-1 text-start'> Contact us</p>
    <p>lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum </p>

      <Row className="mb-3 d-flex">

        <Form.Group className='' as={Col} md="6" sm="6" xs="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            defaultValue="Mark"
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="6" sm="6" xs="6" controlId="validationCustom02">
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



      <Row className="mb-3">
        <Form.Group as={Col} md="4" sm="4" xs="4" controlId="validationCustom03">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4"sm="4" xs="4" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid state.
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group as={Col} md="4" sm="4" xs="4" controlId="validationCustom05">
          <Form.Label>Zip</Form.Label>
          <Form.Control type="text" placeholder="Zip" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid zip.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Form.Group className="mb-12">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <button type="submit" className='green-button'>Submit form</button>
    </Form>
    </Col>

    <Col lg={5} className='mx-5'>
        <img src='4.jpeg' className='img-fluid p-2 me-4 rounded-4' style={styles} alt='support'/>
    </Col>
    </Row>
    <Footer />
    </div>
  );
}

export default FormExample;