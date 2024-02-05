// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom'; // Import useNavigate hook for navigation

// function Login() {
//   const navigate = useNavigate(); // Initialize navigate function

//   return (
//     <Container className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
//       <Row>
//         <Col md={12} lg={12} className="mx-auto">
//           <div className="login-box p-4 shadow rounded" style={{ width: '100%', maxWidth: '500px', minWidth: '300px', maxHeight: '500px', minHeight: '350px' }}> {/* Adjusted for better sizing */}
//             <h2 className="text-center">Login / Create Account</h2>
//             <Form>
//               {/* Form fields */}
//               <Form.Group controlId="formBasicEmail" className="mb-3">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" />
//               </Form.Group>

//               <Form.Group controlId="formBasicPassword" className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" />
//               </Form.Group>

//               {/* Buttons */}
//               <div className="d-grid gap-2 mt-3">
//                 <Button variant="primary" type="submit">
//                   Login
//                 </Button>
//                 <Button variant="secondary" onClick={() => navigate('/create-account')}>
//                   Create Account
//                 </Button>
//               </div>
//             </Form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Login;






// import { Container, Row, Col, Form, Button } from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

// import Image from 'react-bootstrap/Image';

// function Login() {
//   const navigate = useNavigate(); // Initialize navigate function
//   const i = 'https://thumbs.dreamstime.com/b/service-provider-icon-monocrome-creative-element-service-provider-icon-banners-infographics-templates-service-provider-221200023.jpg';

//   return (
//     <Container className="d-flex justify-content-center align-items-center vh-100">
//       <Row className="w-100">
//         {/* Image Column */}
//         <Col md={6} className="d-none d-md-block">
//           <div className="h-100" style={{ backgroundSize: 'cover',  }}>
//             {/* Optionally, add content over your image here */}
//             <Image src={ i } rounded style={{ maxWidth: '500px', minWidth: '300px', minHeight: '400px' }}/>
//           </div>
//         </Col>

//         {/* Divider (optional) */}
//         <Col md={1} className="d-none d-md-flex justify-content-center align-items-center">
//           <div style={{ height: '100%', width: '1px', backgroundColor: '#000' }}></div>
//         </Col>

//         {/* Login Form Column */}
//         <Col md={5}>
//           <div className="p-4 shadow rounded" style={{ maxWidth: '500px', minWidth: '300px', minHeight: '400px', width: '500px', height: '500px' }}>
//             <h2 className="text-center">Login / Create Account</h2>
//             <Form>
//               {/* Form fields */}
//               <Form.Group controlId="formBasicEmail" className="mb-3">
//                 <Form.Label>Email address</Form.Label>
//                 <Form.Control type="email" placeholder="Enter email" />
//               </Form.Group>

//               <Form.Group controlId="formBasicPassword" className="mb-3">
//                 <Form.Label>Password</Form.Label>
//                 <Form.Control type="password" placeholder="Password" />
//               </Form.Group>

//               {/* Buttons */}
//               <div className="d-grid gap-2 mt-3">
//                 <Button variant="primary" type="submit">
//                   Login
//                 </Button>
//                 <Button variant="secondary" onClick={() => navigate('/create-account')}>
//                   Create Account
//                 </Button>
//               </div>
//             </Form>
//           </div>
//         </Col>
//       </Row>
//     </Container>
//   );
// }

// export default Login;

import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const photo = 'https://thumbs.dreamstime.com/b/service-provider-icon-monocrome-creative-element-service-provider-icon-banners-infographics-templates-service-provider-221200023.jpg';


  return (
    <Container fluid className="d-flex justify-content-center align-items-center" style={{ height: '100vh' }}>
      <Row className="w-100 gx-0"> {/* Remove gap between columns with gx-0 */}
        {/* Image Column */}
        <Col lg={5} className="d-none d-lg-flex justify-content-center align-items-center bg-light"> {/* Optional: bg-light for styling */}
          <img src={photo} alt="Your Image" style={{ maxWidth: '100%', maxHeight: '100vh' }} />
        </Col>

        {/* Divider Column - Only visible on lg screens and up */}
        <Col lg={1} className="d-none d-lg-block">
          <div className="vertical-divider" style={{ height: '100%', width: '1px', backgroundColor: '#dee2e6' }}></div>
        </Col>

        {/* Form Column */}
        <Col xs={12} lg={6} className="d-flex justify-content-center align-items-center">
          <div className="p-4 shadow rounded" style={{ width: '100%', maxWidth: '500px' }}>
            <h2 className="text-center">Login / Create Account</h2>
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

              {/* Buttons */}
              <div className="d-grid gap-2 mt-3">
                <Button variant="primary" type="submit">Login</Button>
                <Button variant="secondary" onClick={() => navigate('/create-account')}>Create Account</Button>
              </div>
            </Form>
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
