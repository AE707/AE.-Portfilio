import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiNetlify,
  SiArduino,
  SiRedhat,
  SiAdobepremierepro,
  SiAdobeaftereffects,
  SiGit
} from "react-icons/si";

const Toolstack = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiArduino />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedhat />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNetlify />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobepremierepro />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiAdobeaftereffects />
      </Col>
    </Row>
  );
}

export default Toolstack;
