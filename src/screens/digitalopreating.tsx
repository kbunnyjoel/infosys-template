import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button } from 'react-bootstrap'
import '../App.css'

const DigitalOperating = () => {
    return (

        <Container fluid className="butteryfly-img" style={{
            background: 'url("/images/ant.png") no-repeat #0F9FFA',
            color: "white",
            height: "100vh",
            paddingTop: "120px",
            whiteSpace: "break-spaces"
        }}>
            <Container>
                <Row>
                    <Col lg={{ span: 6, offset: 6 }} xs>
                        <p style={{
                            fontSize: "40px", alignItems: "center",

                            fontWeight: 'bold'
                        }}>Digital Operating Models</p>
                        <Row><p style={{
                            fontSize: "20px",
                            lineHeight: "23.5px",
                            fontWeight: 400, fontStyle: "italic"
                        }}>
                            Adopt accelerators to evolve your way of working.</p>
                        </Row>
                        <Row>
                            <Col lg={5} xs>
                                <Button style={{
                                    padding: "10px 40px",
                                    border: "1px solid white", color: "white",
                                      marginTop: "30px",
                                }}
                                    variant="outline-dark">
                                    Explore
                                </Button>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={12} xs>
                                <p style={{

                                    fontSize: "14px",
                                    fontWeight: 400,
                                    opacity: " 0.7",
                                    letterSpacing: "1.5px",
                                    marginBottom: "5px",
                                    color: "#FFFFFF",
                                    paddingTop: "20px", textTransform: "uppercase"
                                }}>Case Studies</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={5} xs>
                                <p className="paragraph-font-oswald" style={{ paddingTop: "20px", fontWeight: "bold", fontSize: "20px" }}>
                                    Powering Radial’s digital transformation journey</p>
                                <p style={{ textTransform: "uppercase" }}><a>View</a></p>
                            </Col>
                            <Col lg={5} xs>
                                <p className="paragraph-font-oswald" style={{ paddingTop: "20px", fontWeight: "bold", fontSize: "20px" }}>
                                    Accelerating Citizens Energy Group’s Customer Experience journey</p>
                                <p style={{ textTransform: "uppercase" }}><a>View</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </Container >

    )
}

export default DigitalOperating;