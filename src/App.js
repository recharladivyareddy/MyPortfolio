import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import About from './Components/About';
import Navbar from './Components/Navbar';
import './App.css';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
function App() {
  return (
    <Router>
    <Navbar />
      <Routes>
        <Route path = "/" element={<About/>}></Route>
        <Route path = "/projects" element={<Projects/>}></Route>
        <Route path = "/contact" element={<Contact/>}></Route>
      </Routes>
    </Router>
  );

}

export default App;
