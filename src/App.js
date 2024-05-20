import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Home from './Pages/home/Home';
import Cart from './Pages/cart/Cart';
import Nopage from './Pages/nopage/Nopage';
import MyState from './Contect/data/MyState'
import ProductInfo from './Pages/productinfo/ProductInfo'; import AboutUs from './Pages/about/AboutUs';
import Contacatus from './Pages/about/Contacatus';
import Service from './Pages/about/Service';


function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/productinfo/:title" element={<ProductInfo />} />
          <Route path="/*" element={<Nopage />} /><Route path="/aboutus" element={<AboutUs />} />
          <Route path="/contacatus" element={<Contacatus />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </Router>
    </MyState>
  )
}

export default App;
