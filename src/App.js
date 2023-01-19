
import './App.css';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import CartProvider from './CartContext';


function App() {
  return (
    <div className="App">
      <CartProvider>
        <Router>
          <Header />
            <Routes>
                <Route path="/checkout" element={<Checkout />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </Router>
      </CartProvider>
    </div>
  );
}

export default App;
