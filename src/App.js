import './App.css';
import Home from './components/Home';
import Navbar from './components/Navbar';
import ProductsPage from './components/ProductsPage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';


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
                    <p>X</p>
                </div>
                <div className="drawerLinks">
                <a href = {'/'}><p>Home</p></a>
                    <a href = {'/products'}><p>Menu</p></a>
                    <a href = {'/about'}><p>About Us</p></a>
                    <a href = {'/contact'}><p>Contact Us</p></a>
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
