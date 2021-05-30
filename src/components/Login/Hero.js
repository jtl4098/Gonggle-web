import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route, Redirect} from "react-router-dom";

import {Link} from "react-router-dom";
import firebase from '../../firebase';
import MyEducation from '../MyEducation/MyEducation';
import "./Hero.css";
import MainNavbar from '../Main/MainNavbar';
import "../Navbar/Navbar.css";
import MyCourse from "../MyCourse/MyCourse";

const Hero = (props) => {
    const {email, setEmail,handleLogout, user, setUser, educationId, setEducationId} = props;
    const authListener = () =>{
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
           
                
                setUser(user);
                console.log(educationId);


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

            <div className="hero-main">
            <Router>
                <MainNavbar
                    handleLogout = {handleLogout}
                />
                <Switch>
                    <Route path='/'exact={true}/>
                    {/* <Route path='/courses' component={MyEducation}/> */}
                    <Route path="/courses" render={ () => <MyCourse educationId = {educationId}  />} />

                </Switch>
            </Router>
            
                
            </div>
    </>
        
    )
}

export default Hero;