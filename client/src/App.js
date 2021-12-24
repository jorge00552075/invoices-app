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
// LOOK FOR ANY SMALL ISSUES
// - FILTER BACKGROUND COLOR
// - DETAILPAGE ONLOAD ERROR
// - DRAFT STATUS BACKGROUND DARK MODE
// - FIX FORM BACKGROUND (WHITE)
// - 404 PAGE BACKGROUND
// - ITEM PRICE & TOTAL EQUAL WIDTH
// - BACK LINK
// - BEST REACT CSS ANIMATION LIBRARY
// - BORDER RADIUS FORM
// - ADD EDIT INVOICE ID TO FORM

// View the optimal layout for the app depending on their device's screen size
