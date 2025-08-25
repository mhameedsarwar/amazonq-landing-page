import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import HomePage from './pages/Home';
import Shop from './pages/Shop';
import Footer from './components/layout/Footer';
import ErrorBoundary from './components/ui/ErrorBoundary';
import Breadcrumb from './components/ui/Breadcrumb';

function App() {
  const [currency, setCurrency] = useState('USD');

  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <Header currency={currency} setCurrency={setCurrency} />
          <Breadcrumb />
          <Routes>
            <Route path="/" element={<HomePage currency={currency} />} />
            <Route path="/shop" element={<Shop currency={currency} />} />
          </Routes>
          <Footer />
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;