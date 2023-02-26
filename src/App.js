
import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import './App.css';

import Links from './Components/Links';

import Javascript from './Components/Javascript';

import About from './Components/pages/About';
import Home from './Components/pages/Home';


function App() {
  return (
    <div>
       <Links/>
       <Javascript/>
      <Router>
        <Routes> 
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="about" element={<About/>}/>
        </Routes>
        
      </Router>
      
      <Javascript/>
      
    </div>
  );
}

export default App;
