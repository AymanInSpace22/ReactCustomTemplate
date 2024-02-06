import { Container } from 'react-bootstrap';

// function NotFound() {
//   return (
//     <div >
//        <br />
//        <br />
//        <br />
//       <h1 className="text-danger text-center">Not Found</h1>
//       <p className="text-center">Sorry, the page you've requested can not be reached</p>
//     </div>
//   )
// }




function NotFound() {
  return (
    <Container className="d-flex align-items-center justify-content-center " style={{ minHeight: '100vh' }}>
      <div id="notFound">
        <h1 className="text-danger text-center">Not Found</h1>
        <p>Sorry, the page you've requested cannot be reached</p>
      </div>
    </Container>
  );
}

export default NotFound;
