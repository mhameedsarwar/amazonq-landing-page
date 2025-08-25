import React from 'react';
import { Breadcrumb as BootstrapBreadcrumb, Container } from 'react-bootstrap';
import { useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  const breadcrumbNameMap = {
    '/shop': 'Shop',
    '/cart': 'Shopping Cart',
    '/women': 'Women',
    '/men': 'Men',
    '/about': 'About',
    '/contact': 'Contact'
  };

  if (pathnames.length === 0) return null;

  return (
    <div className="bg-light py-2">
      <Container>
        <BootstrapBreadcrumb className="mb-0">
          <BootstrapBreadcrumb.Item href="/">Home</BootstrapBreadcrumb.Item>
          {pathnames.map((pathname, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;
            const name = breadcrumbNameMap[routeTo] || pathname.charAt(0).toUpperCase() + pathname.slice(1);

            return isLast ? (
              <BootstrapBreadcrumb.Item key={routeTo} active>
                {name}
              </BootstrapBreadcrumb.Item>
            ) : (
              <BootstrapBreadcrumb.Item key={routeTo} href={routeTo}>
                {name}
              </BootstrapBreadcrumb.Item>
            );
          })}
        </BootstrapBreadcrumb>
      </Container>
    </div>
  );
};

export default Breadcrumb;