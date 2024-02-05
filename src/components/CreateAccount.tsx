import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function CreateAccount() {
  const navigate = useNavigate();

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row>
        <Col md={12} lg={12} className="mx-auto">
          <div className="create-account-box p-4 shadow rounded" style={{ width: '100%', maxWidth: '500px', minWidth: '350px' }}>
            <h2 className="text-center">Create Account</h2>
            <Form>
              {/* Form fields */}
              <Form.Group controlId="formBasicEmail" className="mb-3">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
              </Form.Group>

              <Form.Group controlId="formBasicPassword" className="mb-3">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>

              <Form.Group controlId="formBasicPhone" className="mb-3">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control type="tel" placeholder="Enter phone number" />
              </Form.Group>

              {/* Buttons */}
              <div className="d-grid gap-2 mt-3">
                <Button variant="success" type="submit">
                  Create Account
                </Button>
                <Button variant="secondary" onClick={() => navigate('/login')}>
                  Back to Login
                </Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default CreateAccount;
