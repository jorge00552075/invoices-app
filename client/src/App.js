import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import NotFound from './pages/NotFound';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/invoice/:id" element={<DetailPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
