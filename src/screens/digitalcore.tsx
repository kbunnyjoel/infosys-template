import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row, Button } from 'react-bootstrap'
import '../App.css'

const DigitalCore = () => {
    return (

        <Container fluid className="butterfly-img"
            style={{
                color: "white",
                height: "100vh",
                paddingTop: "120px",
                background: 'url("/images/butterfly.png") no-repeat #DF9926',
                whiteSpace: "break-spaces"
            }}>
            <Container>
                <Row>
                    <Col lg={5} xs>
                        <h2 style={{
                            fontSize: "40px",
                            alignItems: "center",
                            fontWeight: 'bold'
                        }}>Digital Core Capabilities</h2>
                        <Row><p style={{
                            fontSize: "20px",
                            lineHeight: "23.5px",
                            fontWeight: 400, fontStyle: "italic"
                        }}>
                            Build Vital capabilities to deliver digital outcomes</p>
                        </Row>
                        <Row>
                            <Col lg={5} xs>
                                <Button style={{
                                    padding: "10px 40px", marginTop: "30px", border: "1px solid white", color: "white"
                                }}
                                    variant="outline-dark">
                                    Explore
                                </Button>
                            </Col>
                        </Row>

                        <Row>
                            <Col lg={12} xs>
                                <p

                                    style={{

                                        fontSize: "14px",
                                        fontWeight: 400,
                                        opacity: " 0.7",
                                        letterSpacing: "1.5px",
                                        marginBottom: "5px",
                                        color: "#FFFFFF",
                                        paddingTop: "20px", textTransform: "uppercase"
                                    }}>
                                    Case Studies</p>
                            </Col>
                        </Row>
                        <Row>
                            <Col lg={5} xs>
                                <p className="paragraph-font-oswald" style={{ fontWeight: "bold", fontSize: "20px" }}>
                                    Pfizer's journey towards increased productivity, powered by AI</p>
                                <p style={{ textTransform: "uppercase" }}><a>View</a></p>
                            </Col>
                            <Col lg={5} xs>
                                <p className="paragraph-font-oswald" style={{ fontWeight: "bold", fontSize: "20px" }}>
                                    A government that contributes to the joy of parenting</p>
                                <p style={{ textTransform: "uppercase" }}><a>View</a></p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container >
        </Container >

    )
}

export default DigitalCore;