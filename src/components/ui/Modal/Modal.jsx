import React from 'react';
import { Modal as BootstrapModal } from 'react-bootstrap';

const Modal = ({ 
  show = false, 
  onHide, 
  size = 'lg', 
  centered = true, 
  className = '', 
  children, 
  ...props 
}) => {
  return (
    <BootstrapModal 
      show={show} 
      onHide={onHide} 
      size={size} 
      centered={centered} 
      className={className} 
      {...props}
    >
      {children}
    </BootstrapModal>
  );
};

const ModalHeader = ({ className = '', children, ...props }) => {
  return (
    <BootstrapModal.Header className={className} {...props}>
      {children}
    </BootstrapModal.Header>
  );
};

const ModalBody = ({ className = '', children, ...props }) => {
  return (
    <BootstrapModal.Body className={className} {...props}>
      {children}
    </BootstrapModal.Body>
  );
};

const ModalFooter = ({ className = '', children, ...props }) => {
  return (
    <BootstrapModal.Footer className={className} {...props}>
      {children}
    </BootstrapModal.Footer>
  );
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;