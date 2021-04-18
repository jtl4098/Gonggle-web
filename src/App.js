
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginHome from './components/LoginHome/LoginHome';
import Navbar from "./components/Navbar/Navbar";

import './App.css'





function App() {
  return (
    <div className="App">
    
      

      <BrowserRouter>
      <Route path="/" exact={true} component={Navbar} />
      <Route path="/loginHome"  component={LoginHome}/>
      </BrowserRouter>
    </div>
  );
}

export default App;
