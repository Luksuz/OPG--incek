import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import Navbar from './components/Navbar';
import login from './APIUtils/adminAPI';

function AdminLogin() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event) => {
      event.preventDefault();
      login(username, password);
    };



  document.body.style.backgroundColor = "#73F28F90";

  return (
  <>
  <Navbar />
    <Form onSubmit={handleSubmit} className='d-flex flex-column justify-content-center align-items-center w-100 h-100vh'>
      <Row className="mb-3">
       
        <Form.Group as={Col} md="10" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              type="text"
              placeholder="Username"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
            Unesite korisničko ime
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
        </Row>
        <Row className="mb-3">

        <Form.Group as={Col} md="10" controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup hasValidation>
            <Form.Control
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              type="text"
              placeholder="password"
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Unesite lozinku
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>

      </Row>

      <Button type="submit">Submit form</Button>
    </Form>
    </>
  );
}

export default AdminLogin;