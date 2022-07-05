import React from "react"

import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Dev from './pages/Dev';
import Error from './pages/Error';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Dev" element={<Dev />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;