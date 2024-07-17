import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import bootstrap from 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './compo/navbar';
import About from './compo/about';
import Contact from './compo/contact';
import Home from './compo/home';

function App() {
  return (
    <Router>
      <Navbar />
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
