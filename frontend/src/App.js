import './App.css';

import { BrowserRouter, Routes, Route, Switch, Link, Redirect } from "react-router-dom";

import Home from "./pages/index"
import About from "./pages/About"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
      </Routes>
    </BrowserRouter>

  );
}

export default App;