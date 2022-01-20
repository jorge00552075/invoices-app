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
// fix detail page table & buttons

// Save theme in local storage
// Which css animation library to use ?
