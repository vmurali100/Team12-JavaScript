import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';

import  Features  from './components/Features';
import Pricing from './components/Pricing';
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/features" element={<Features/>}/>
      <Route path="/pricing" element={<Pricing/>}/>
     </Routes>
     </BrowserRouter>

















































































































     
    </div>
  );
}

export default App;
