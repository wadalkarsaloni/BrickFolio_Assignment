import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Menu from "./Components/Menu";
import Footer from "./Components/Footer";
import Contact from "./Components/Contact";
import Cart from "./Components/Cart";
import About from "./Components/About";
import Registration from "./Components/Registration"
import { CartProvider } from "react-use-cart";


function App() {
  return (
    <>
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/About" element={<About />} />
          <Route path="/Registration" element={<Registration />} />
        </Routes>
        <Footer />
      </Router>
      </CartProvider> 
    </>
  );
}

export default App;
