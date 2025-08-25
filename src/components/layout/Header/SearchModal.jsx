import React, { useState } from 'react';
import { Modal, Form, Button, ListGroup } from 'react-bootstrap';

const SearchModal = ({ show, onHide }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions] = useState([
    'Organic Cotton T-Shirt',
    'Denim Jacket',
    'Cashmere Sweater',
    'Leather Boots',
    'Silk Dress',
    'Wool Coat'
  ]);

  const filteredSuggestions = suggestions.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <Modal show={show} onHide={onHide} size="lg" centered>
      <Modal.Header closeButton>
        <Modal.Title>Search</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Control
            type="text"
            placeholder="Search for products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="mb-3"
            autoFocus
          />
        </Form>
        
        {searchTerm && (
          <div>
            <h6>Suggestions</h6>
            <ListGroup variant="flush">
              {filteredSuggestions.map((item, index) => (
                <ListGroup.Item 
                  key={index} 
                  action 
                  onClick={() => {
                    setSearchTerm(item);
                    onHide();
                  }}
                >
                  {item}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </div>
        )}
      </Modal.Body>
    </Modal>
  );
};

export default SearchModal;