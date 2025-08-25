import React from 'react';
import { Container, Spinner } from 'react-bootstrap';

const Loading = ({ message = "Loading..." }) => {
  return (
    <Container className="py-5">
      <div className="text-center">
        <Spinner animation="border" role="status" className="mb-3">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
        <p>{message}</p>
      </div>
    </Container>
  );
};

export default Loading;