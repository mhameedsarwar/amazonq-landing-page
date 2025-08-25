import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './FeatureBlocks.css';

const FeatureBlocks = () => {
  const features = [
    {
      id: 1,
      icon: "fas fa-shipping-fast",
      title: "Complimentary Shipping",
      description: "Enjoy free shipping on U.S. orders over $100."
    },
    {
      id: 2,
      icon: "fas fa-leaf",
      title: "Consciously Crafted",
      description: "Designed with you and the planet in mind."
    },
    {
      id: 3,
      icon: "fas fa-store",
      title: "Come Say Hi",
      description: "We have 11 stores across the U.S."
    }
  ];

  return (
    <Container className="py-5">
      <Row>
        {features.map(feature => (
          <Col md={4} key={feature.id} className="mb-4">
            <div className="text-center">
              <div className="d-flex align-items-center justify-content-center mb-3 mx-auto FeatureBlocks-iconContainer">
                <i className={`${feature.icon} FeatureBlocks-icon`}></i>
              </div>
              <h4 className="mb-2 FeatureBlocks-title">
                {feature.title}
              </h4>
              <p className="mb-0 FeatureBlocks-description">
                {feature.description}
              </p>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default FeatureBlocks;