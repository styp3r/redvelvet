import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Fb from './images/Decoration/facebook.png';
import In from './images/Decoration/instagram.png';
import Wa from './images/Decoration/whatsapp.png';


import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


function App() {

  function handleCloseBurger() {
    document.getElementById("navDrawer").style.display = "none";
  }

  return (
    <div>
      <div id="navDrawer">
        <div className="closeDrawerBtn" onClick={handleCloseBurger}>
          <span class="material-symbols-outlined closeBtn">close</span>
        </div>
        <div className="drawerLinks">
          <a href={'/'}><p className="dLink">Home</p></a>
          <a href={'/products'}><p className="dLink">Menu</p></a>
          <a href={'/about'}><p className="dLink">About Us</p></a>
          <a href={'/contact'}><p className="dLink">Contact Us</p></a>

          <div className="social">
            <img className="fb" src={Fb} />
            <a href="https://www.instagram.com/laddoossweetsindia/"><img className="in" src={In} /></a>
            <a href = "https://wa.me/+919945258005"><img className="wa" src={Wa} /></a>
          </div>
          <div>
          <p className="footerTag">Healthy, Fast-Casual Food, Crafted with &#x2764; In Bengaluru</p>
          </div>
        </div>

      </div>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="home" element={<Home />}></Route>
            <Route path="products" element={<ProductsPage />}></Route>
            <Route path="about" element={<AboutPage />}></Route>
            <Route path="contact" element={<ContactPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
