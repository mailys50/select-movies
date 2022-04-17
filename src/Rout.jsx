import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Peliculagrid from './component/Peliculagrid';
import Tarjeta from './component/Tarjeta';

// const  = lazy(() => import('./routes/Home'));
// const About = lazy(() => import('./routes/About'));

function Rout()  {
  <Router>
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Peliculagrid />} />
        <Route path="/about" element={<div><Tarjeta /></div>} />
      </Routes>
    </Suspense>
  </Router>
};

export default Rout;
  
