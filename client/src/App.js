import React from "react";
import { Routes, Route } from "react-router-dom";

import InvoicesHome from "./pages/InvoicesHome.jsx";
import InvoicesDetail from "./pages/InvoicesDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import { InvoiceContextProvider } from "./context/invoices-context.jsx";

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
// create a filtering component !
// fix buttons to bottom of form on scroll

// fix buttons to bottom of invoice detail on mobile !
// re-size confirm deletion modal on mobile

// save theme to local storage
// add meta tags
// which css animation library to use?

// fixed numer
// fixed title
