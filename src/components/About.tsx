import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import OffCanvasBtn from './OffCanvasBtn';
import { Container } from 'react-bootstrap';




// function About() {
//   const [show, setShow] = useState(false);

//   const handleClose = () => setShow(false);
//   const handleShow = () => setShow(true);

//   return (
//     <>
//       <Button id="hush" variant="primary" onClick={handleShow}>
//         Launch
//       </Button>

//       <Offcanvas show={show} onHide={handleClose}>
//         <Offcanvas.Header closeButton>
//           <Offcanvas.Title>Offcanvas</Offcanvas.Title>
//         </Offcanvas.Header>
//         <Offcanvas.Body>
//           Some text as placeholder. In real life you can have the elements you
//           have chosen. Like, text, images, lists, etc.
//         </Offcanvas.Body>
//       </Offcanvas>
//     </>
//   );
// }


function About() {
  return (
    <>
      <Container className="d-flex  justify-content-center align-items-center " style={{ minHeight: '100vh' }}>
     
      <div id="aboutHero">
        <h1 className="text-center" style={{textDecoration: "underline black 2px"}}>About EasyLib</h1>
        <h3 className='text-center'>Who are We?</h3>
        <h5>We are a highly trained team of sexy agents that deliver software solutions</h5>
        <h5>We are excited to have you try our product and would appreciate your feedback</h5>
        
        <br />
        <div className="text-center"> {/* Center the image horizontally */}
            <img src='thumbsUp.png' alt='Image' style={{ maxHeight: '100%', maxWidth: '100%', width: "300px", height: "auto" }} /> {/* Center the image vertically */}
            <OffCanvasBtn />
          </div>
      </div>
    

    </Container>
    </>
  );
}

export default About;