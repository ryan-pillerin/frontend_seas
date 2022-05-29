import { React } from 'react'
import {
  Col,
  Container,
  Row,
  Card
} from 'react-bootstrap'

function Home() {
 
  return (
    <Container>
      <Row>
        <Col xs={12} style={{marginTop: '20px'}}>
          <Card className="bg-dark" style={{border: 'none'}}>
            <Card.Img src={'assets/img/background.jpg'} alt="Card image"  style={{height: '85vh'}} />
            <Card.ImgOverlay style={{padding:0}}>
              <Row>
                <Col xs={6} style={{background: 'red', height: '85vh'}}>
                  <Card.Title>Welcome to GGCAST</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Col>
                <Col xs={6}>
                <Card.Title>Welcome to GGCAST</Card.Title>
                  <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                  </Card.Text>
                  <Card.Text>Last updated 3 mins ago</Card.Text>
                </Col>
              </Row>
            </Card.ImgOverlay>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default Home