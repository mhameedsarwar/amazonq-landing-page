import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './MegaMenu.css';

const MegaMenu = ({ isOpen, category, onClose }) => {
  const menuData = {
    women: {
      title: "Women",
      sections: [
        {
          title: "Clothing",
          items: ["Dresses", "Tops", "Sweaters", "Pants", "Jeans", "Skirts", "Jackets", "Coats"]
        },
        {
          title: "Shoes",
          items: ["Sneakers", "Boots", "Flats", "Heels", "Sandals", "Loafers"]
        },
        {
          title: "Accessories",
          items: ["Bags", "Jewelry", "Scarves", "Belts", "Hats", "Sunglasses"]
        },
        {
          title: "Featured",
          items: ["New Arrivals", "Best Sellers", "Sale", "Gift Cards"]
        }
      ]
    },
    men: {
      title: "Men",
      sections: [
        {
          title: "Clothing",
          items: ["Shirts", "T-Shirts", "Sweaters", "Pants", "Jeans", "Shorts", "Jackets", "Coats"]
        },
        {
          title: "Shoes",
          items: ["Sneakers", "Boots", "Dress Shoes", "Casual Shoes", "Sandals"]
        },
        {
          title: "Accessories",
          items: ["Bags", "Watches", "Belts", "Wallets", "Hats", "Sunglasses"]
        },
        {
          title: "Featured",
          items: ["New Arrivals", "Best Sellers", "Sale", "Gift Cards"]
        }
      ]
    }
  };

  const currentMenu = menuData[category];

  if (!isOpen || !currentMenu) return null;

  return (
    <div className="mega-menu-overlay">
      <div className="mega-menu">
        <Container>
          <Row>
            {currentMenu.sections.map((section, index) => (
              <Col md={3} key={index}>
                <h6 className="mega-menu-section-title">{section.title}</h6>
                <ul className="mega-menu-items">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex}>
                      <a href="#" className="mega-menu-link">{item}</a>
                    </li>
                  ))}
                </ul>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default MegaMenu;