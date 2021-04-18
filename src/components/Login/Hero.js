import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "../Login/Login";
import Navbar from '../Navbar/Navbar';
import {Link} from "react-router-dom";
import firebase from '../../firebase';
import MyEducation from '../MyEducation/MyEducation';

const Hero = (props) => {
    const {email, setEmail,handleLogout} = props;
    
 
    
    return(

        <section className="hero">
            <nav>
                <h2>Welcome</h2>
              


                    <button onClick={handleLogout}>Log Out</button>
                
                
            </nav>
            
            <MyEducation 
                email = {email}
                setEmail = {setEmail}
                />
        </section>
    )
}

export default Hero;