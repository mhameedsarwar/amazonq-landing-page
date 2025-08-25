import React from 'react';
import { Spinner as BootstrapSpinner } from 'react-bootstrap';

const Spinner = ({ 
  animation = 'border', 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  return (
    <BootstrapSpinner 
      animation={animation} 
      variant={variant} 
      size={size} 
      className={className} 
      {...props} 
    />
  );
};

const LoadingSpinner = ({ text = 'Loading...', className = '' }) => {
  return (
    <div className={`d-flex flex-column align-items-center ${className}`}>
      <Spinner />
      <span className="mt-2">{text}</span>
    </div>
  );
};

export default Spinner;
export { LoadingSpinner };