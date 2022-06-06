import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Mainpage from './pages/Mainpage';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import ProductsPage from './pages/Products';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
          <Route path="/contact" element={<ContactPage/>}/>
          <Route path="/products" element={<ProductsPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
