import React from 'react';
import { Routes, Route } from 'react-router-dom';

import InvoicesHome from './pages/InvoicesHome.jsx';
import InvoicesDetail from './pages/InvoicesDetail.jsx';
import NotFound from './pages/NotFound.jsx';
import { InvoiceContextProvider } from './context/invoices-context.jsx';

function App() {
  return (
    <InvoiceContextProvider>
      <Routes>
        <Route path="/" element={<InvoicesHome />} />
        <Route path="/invoice/:id" element={<InvoicesDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </InvoiceContextProvider>
  );
}

export default App;
// TODO
// Save draft invoices
// Users should receive a confirmation modal when trying to delete invoices.

// Toggle light and dark mode
// View the optimal layout for the app depending on their device's screen size
