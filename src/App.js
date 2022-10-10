import React from 'react';
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Books from './Components/Books/Books';
import NavBar from './Components/NavBar';
import Footer from './Components/Footer';
import {BrowserRouter, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavBar />
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/books" element={<Books />} exact />
          <Route path="/about" element={<About />} exact />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;