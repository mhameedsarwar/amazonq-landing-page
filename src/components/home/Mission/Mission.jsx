import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../../styles/utilities/_shared.css';
import './Mission.css';

const Mission = () => {
  return (
    <div className="py-5 text-white d-flex align-items-center Mission-backgroundSection">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h2 className="mb-4 text-xxl">
              We're on a Mission To Clean Up the Industry
            </h2>
            <p className="mb-4 text-large">
              Read about our progress in our latest Impact Report.
            </p>
            <Button variant="light" className="button-standard">
              LEARN MORE
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Mission;