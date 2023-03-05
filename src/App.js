
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';

import Links from './Components/Links';

import Javascript from './Components/Javascript';

import About from './Components/pages/About';
import Home from './Components/pages/Home';
import Businesses from './Components/pages/Businesses';
import Contact from './Components/pages/Contact';
import Watersachet from './Components/pages/Watersachet';
import Shoppingoutlets from './Components/pages/Shoppingoutlets';
import Construction from './Components/pages/Construction';
import Foodbeverage from './Components/pages/Foodbeverage';
import Industrial from './Components/pages/Industrial';


function App() {
  return (
    <div>
      <Links />
      <Javascript />
      
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Businesses />}/>
            <Route path="/watersachet" element={<Watersachet />} />
            <Route path="/shoppingoutlets" element={<Shoppingoutlets />} />
            <Route path="/construction" element={<Construction />} />
            <Route path="/fandb" element={<Foodbeverage />} />
            <Route path="/industrial" element={<Industrial />} />
          
          <Route path="/contact" element={<Contact />} />

        </Routes>

      </Router>

      <Javascript />

    </div>
  );
}

export default App;
