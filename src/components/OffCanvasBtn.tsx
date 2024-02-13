import { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";

function OffCanvasBtn() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <button className="button" id="hush"  onClick={handleShow}>
        Launch
      </button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Mission Statement</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <p>
            To empower every person and every organization on the planet to
            achieve more.
          </p>

          <br />
          <br />
          <Offcanvas.Title>Core Values</Offcanvas.Title>

          <br />
          <ul>
            <li>Innovation</li>
            <li>Integrity</li>
            <li>Creativity</li>
          </ul>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default OffCanvasBtn;
