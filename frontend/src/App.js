import './App.css';

import { HashRouter as Router, Routes, Route } from "react-router-dom";
//Pages
import Home from "./pages/index"
import About from "./pages/About"

//Temporary
import Disclaimer from './components/Disclaimer';
import TopNavigation from './components/TopNavigation';
import Gallery from './components/Gallery';
import Information from './components/Information';
import StickerSection from './components/StickerSection';
import Footer from './components/Footer';

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
    <Disclaimer />
    <TopNavigation />
    <Gallery />
    <Information />
    <StickerSection />
    <Footer />
    </>

  );
}

export default App;