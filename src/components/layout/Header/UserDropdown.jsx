import React, { useState } from 'react';
import { Dropdown } from 'react-bootstrap';

const UserDropdown = () => {
  return (
    <Dropdown>
      <Dropdown.Toggle 
        variant="outline-light" 
        className="border-0 text-dark"
        id="user-dropdown"
      >
        <i className="fas fa-user fs-5"></i>
      </Dropdown.Toggle>

      <Dropdown.Menu align="end">
        <Dropdown.Item href="#">Sign In</Dropdown.Item>
        <Dropdown.Item href="#">Create Account</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">My Account</Dropdown.Item>
        <Dropdown.Item href="#">Order History</Dropdown.Item>
        <Dropdown.Item href="#">Wishlist</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item href="#">Help & Support</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default UserDropdown;