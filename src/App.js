import './App.css';
import Hero from './components/Hero';
import BestSellers from './components/Bestsellers';
import About from './components/About';
import Services from './components/Services';
import Platforms from './components/Platforms';
import Reviews from './components/Reviews';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <BestSellers />
      <Platforms />
      <Reviews />
      <Footer />
    </div>
  );
}

export default App;
