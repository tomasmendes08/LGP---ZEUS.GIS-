import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Mainpage from './pages/Mainpage';
import AboutPage from './components/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Mainpage/>}/>
          <Route path="/about" element={<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
