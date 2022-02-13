import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import DetailPage from './pages/DetailPage.jsx';
import NotFoundPage from './pages/NotFoundPage';
import { InvoiceContextProvider } from './context/invoices-context.jsx';

const htmlEl = document.documentElement;
function App() {
  useEffect(() => {
    // On load check for color-theme
    const themeColor = localStorage.getItem('theme-color');

    if (themeColor) {
      htmlEl.setAttribute('data-theme', themeColor);
    }
  }, []);

  return (
    <InvoiceContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/invoice/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </InvoiceContextProvider>
  );
}

export default App;
// add css animations
