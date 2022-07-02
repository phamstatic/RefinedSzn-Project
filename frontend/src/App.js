import React from "react"
import './App.css';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

//Pages
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