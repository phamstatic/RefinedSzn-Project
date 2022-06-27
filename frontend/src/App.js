import './App.css';
import Disclaimer from './components/Disclaimer';
import TopNavigation from './components/TopNavigation';
import Gallery from './components/Gallery';
import StickerSection from './components/StickerSection';
import Information from './components/Information';
function App() {
  return (
    <>
      <Disclaimer />
      <TopNavigation />
      <Gallery />
      <StickerSection />
      <Information />
    </>
  );
}

export default App;