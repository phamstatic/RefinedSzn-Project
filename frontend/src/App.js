import './App.css';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import Disclaimer from './components/Disclaimer';
import TopNavigation from './components/TopNavigation';
import Gallery from './components/Gallery';
function App() {
  return (
    <>
      <Disclaimer />
      <TopNavigation />
      <Gallery />
    </>
  );
}

export default App;