import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';
import { InvoiceContextProvider } from './context/invoices-context';

function App() {
  return (
    <InvoiceContextProvider>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/invoice/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </InvoiceContextProvider>
  );
}

export default App;
// Add delete invoice modal
// Add loading spinner
