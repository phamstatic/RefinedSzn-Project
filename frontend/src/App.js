import React from "react"
import './App.css';

import Disclaimer from './components/Disclaimer';
import TopNavigation from './components/TopNavigation';
import Gallery from './components/Gallery';
import Information from './components/Information';
import StickerSection from './components/StickerSection';
import Footer from './components/Footer';

import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="*" element={<Error />}/>
      </Routes>
    </Router>
  );
}

export default App;