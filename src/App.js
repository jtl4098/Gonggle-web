
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import LoginHome from './components/LoginHome/LoginHome';
import Navbar from "./components/Navbar/Navbar";

import './App.css';
import Login from './components/Login/Login';





function App() {
  return (
    <div className="App">
    
      

      <BrowserRouter>
      <Route path="/" exact={true} component={Navbar} />
      <Route path="/loginHome"  component={LoginHome}/>
      <Route path="/login" component={Login} />
      </BrowserRouter>
    </div>
  );
}

export default App;
