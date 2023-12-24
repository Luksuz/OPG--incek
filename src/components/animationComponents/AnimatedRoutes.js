import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Home from '../../Home';
import ONama from '../../ONama';
import Contact from '../../Contact';
import Ponuda from '../../Ponuda';

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
      </Routes>
      </AnimatePresence >

    )
}