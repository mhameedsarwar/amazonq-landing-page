import React from 'react';
import { Card as BootstrapCard } from 'react-bootstrap';

const Card = ({ className = '', children, ...props }) => {
  return (
    <BootstrapCard className={className} {...props}>
      {children}
    </BootstrapCard>
  );
};

const CardHeader = ({ className = '', children, ...props }) => {
  return (
    <BootstrapCard.Header className={className} {...props}>
      {children}
    </BootstrapCard.Header>
  );
};

const CardBody = ({ className = '', children, ...props }) => {
  return (
    <BootstrapCard.Body className={className} {...props}>
      {children}
    </BootstrapCard.Body>
  );
};

const CardFooter = ({ className = '', children, ...props }) => {
  return (
    <BootstrapCard.Footer className={className} {...props}>
      {children}
    </BootstrapCard.Footer>
  );
};

Card.Header = CardHeader;
Card.Body = CardBody;
Card.Footer = CardFooter;

export default Card;