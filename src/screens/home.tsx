import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button } from 'react-bootstrap'
import '../App.css'

const HomePage = () => {
    return (

        <Container fluid className="lead-img"
            style={{
                background: 'url("/images/lead.jpg")',
             }}>
            <Container>
                <Row>
                    <Col lg={6} md xs>
                        <p className="align-paragraph" style={{whiteSpace:'break-spaces'}}>
                            Unveiling Infosys Equinox: Digital Commerce Platform Driving Human-Centric and Memorable Omnichannel Shopping Experiences</p>
                        <Button style={{ padding: "10px 0px", marginTop: "20px", border: "1px solid white", color: "white" }}
                            variant="outline-dark">
                            Read More
                        </Button>
                    </Col>
                </Row>
            </Container >
        </Container>

    )
}

export default HomePage;