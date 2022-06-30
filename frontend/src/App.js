import './App.css';

import { HashRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/index"
import About from "./pages/About"

function App() {
  return (

        /*
    <Router>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/About' element={<About />}/>
      </Routes>
    </Router>
    */
   
    <>
    <Home />
    </>

  );
}

export default App;