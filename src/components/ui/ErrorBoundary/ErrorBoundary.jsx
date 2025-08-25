import React from 'react';
import { Container } from 'react-bootstrap';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Error caught by boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <Container className="text-center py-5">
          <h2>Something went wrong</h2>
          <p>We're sorry, but something unexpected happened. Please refresh the page.</p>
          <button 
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Refresh Page
          </button>
        </Container>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;