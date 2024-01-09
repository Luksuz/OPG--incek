import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../Home';
import ONama from '../../ONama';
import Contact from '../../Contact';
import Ponuda from '../../Ponuda';
import Košarica from '../../Košarica';
import AdminLogin from '../../AdminLogin';

import { AnimatePresence } from "framer-motion"


export default function AnimatedRoutes() {
    const location = useLocation();
    return (
        <AnimatePresence >
        <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/ONama" element={<ONama />} />
        <Route path="/Kontakt" element={<Contact />} />
        <Route path="/Ponuda" element={<Ponuda />} />
        <Route path="/Kosarica" element={<Košarica />} />
        <Route path="/Adminlogin" element={<AdminLogin />} />
      </Routes>
      </AnimatePresence >

    )
}