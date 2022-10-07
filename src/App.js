import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import BranchesPage from './components/BranchesPage';
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

  document.title = "Laddoos Sweets";

  function handleCloseBurger() {
    document.getElementById("navDrawer").style.display = "none";
  }

  return (
    <div id = "app-overlay">
      <div id="navDrawer">
        <div className="closeDrawerBtn" onClick={handleCloseBurger}>
          <span id = "closeBtn" className="material-symbols-outlined">close</span>
        </div>
        <div className="drawerLinks">
          <a aria-label = "redirects user to home page" href={'/'}><p className="dLink">Home</p></a>
          <a aria-label = "redirects user to products page" href={'/products'}><p className="dLink">Menu</p></a>
          <a aria-label = "redirects user to about page" href={'/about'}><p className="dLink">About Us</p></a>
          <a aria-label = "redirects user to branches page" href={'/branches'}><p className="dLink">Branches</p></a>
          <a aria-label = "redirects user to contact page" href={'/contact'}><p className="dLink">Contact Us</p></a>

          <div className="social">
            <img alt = "loading..." className="fb" src={Fb} />
            <a target = "_blank" rel="noreferrer" href="https://www.instagram.com/laddoossweetsindia/"><img alt = "loading..." className="in" src={In} /></a>
            <a target = "_blank" rel="noreferrer" href = "https://wa.me/+919945258005"><img alt = "loading..." className="wa" src={Wa} /></a>
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
            <Route path="branches" element={<BranchesPage />}></Route>
            <Route path="contact" element={<ContactPage />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
