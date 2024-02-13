import { Container, Row, Col } from 'react-bootstrap';
import AnimationComponent from './AnimationComponent';

function Home() {
  return (
    <Container>
      <Row className="justify-content-center">
      <Col xs={12} sm={10} md={8} lg={6} xl={4}>
          {/* <h1 className='text-center' style={{paddingTop: "10px"}}>Welcome to Our App!</h1> */}


          <div className="wrapper">
            <svg>
              <text x="50%" y="50%" dy=".35em" text-anchor="middle">
                NextAI
              </text>
            </svg>
          </div>
          <div className='trying'>
            <AnimationComponent />
          </div>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;