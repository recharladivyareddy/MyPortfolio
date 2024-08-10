import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import About from './Components/About';
import Navbar from './Components/Navbar';
import './App.css';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Home from './Components/Home';
import Footer from './Components/Footer';
import './style.css';
function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path = "/" element={<Home/>}></Route>
        {/* <Route path = "/about" element={<About/>}></Route> */}
        <Route path = "/projects" element={<Projects/>}></Route>
        <Route path = "/contact" element={<Contact/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );

}

export default App;
