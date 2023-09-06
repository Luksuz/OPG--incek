import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import ONama from './ONama';
import Home from './Home';
import Ponuda from './Ponuda';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div className='app'>
<React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/ONama" element={<ONama />} />
      <Route path="/Ponuda" element={<Ponuda />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>
  </div>
  
);
