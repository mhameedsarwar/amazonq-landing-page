import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import Loading from '../components/ui/Loading';
import './Shop.css';

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError('Failed to load products. Please try again later.');
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <Loading message="Loading products..." />;
  }

  if (error) {
    return (
      <Container className="my-5">
        <div className="text-center">
          <h3>Oops! Something went wrong</h3>
          <p>{error}</p>
          <Button variant="primary" onClick={() => window.location.reload()}>
            Try Again
          </Button>
        </div>
      </Container>
    );
  }

  return (
    <Container className="my-5">
      <h1 className="text-center mb-4 display-6">Shop</h1>
      <Row>
        {products.map(product => (
          <Col md={3} key={product.id} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img variant="top" src={product.image} className="object-fit-contain Shop-productImage" />
              <Card.Body className="d-flex flex-column">
                <Card.Title className="text-truncate small">{product.title}</Card.Title>
                <Card.Text className="fw-bold">${product.price}</Card.Text>
                <div className="mb-2">
                  <small className="text-muted">⭐ {product.rating.rate} ({product.rating.count})</small>
                </div>
                <Button variant="dark" className="mt-auto">Add to Cart</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Shop;