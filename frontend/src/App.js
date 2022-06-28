import './App.css';
import Disclaimer from './components/Disclaimer';
import TopNavigation from './components/TopNavigation';
import Gallery from './components/Gallery';
import StickerSection from './components/StickerSection';
import Information from './components/Information';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Disclaimer />
      <TopNavigation />
      <Gallery />
      <StickerSection />
      <Information />
      <Footer />
    </>
  );
}

export default App;