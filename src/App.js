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
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path = "/" element = {<Home />}></Route>
          <Route path = "products" element = {<ProductsPage />}></Route>
          <Route path = "about" element = {<AboutPage />}></Route>
          <Route path = "contact" element = {<ContactPage />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
