import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import {Link} from "react-router-dom";
import firebase from '../../firebase';
import MyEducation from '../MyEducation/MyEducation';
import "./Hero.css";
import MainNavbar from '../Main/MainNavbar';
import "../Navbar/Navbar.css";

const Hero = (props) => {
    const {email, setEmail,handleLogout, user, setUser} = props;
    const authListener = () =>{
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
           
                
                setUser(user);
                console.log(user);

            }else{
                setUser(null);
       
            }
        });
    };
 
    useEffect( () =>{
        // setUser("");
             authListener();
  
    }, []);
    return(

    <>
            {/* <section className="hero">
                <nav>
                    <h2>Welcome</h2>
                


                        <button onClick={handleLogout}>Log Out</button>
                    
                    
                </nav>

                <MyEducation 
                email = {email}
                setEmail = {setEmail}
                />
                

            </section> */}
            <div className="hero-main">
            <Router>
                <MainNavbar
                    handleLogout = {handleLogout}
                />
                <Switch>
                    <Route path='/'exact={true}/>
                    <Route path='/courses' component={MyEducation}/>

                </Switch>
            </Router>
            
                
            </div>
    </>
        
    )
}

export default Hero;