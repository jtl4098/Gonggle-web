import React, {useState, useEffect} from "react";
import firebase from '../../firebase';
import Login from '../../components/Login/Login';
import "../../components/LoginHome/LoginHome.css";
import Hero from "../Login/Hero";
import {HashRouter, Route} from "react-router-dom";

const LoginHome = () => {

    const [user, setUser] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [emailError , setEmailError] = useState('');
    const [passwordError , setPasswordError] = useState('');
    const [hasAccount , setHasAccount] = useState(false);

    const clearInputs = () =>{
        setEmail('');
        setPassword('');
    }

    const clearErrors = () =>{
        setEmailError('');
        setPasswordError('');
    }

    const handleLogin = () => {
        clearErrors();
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .catch(err =>{
                switch(err.code){
                    case "auth/invalid-email":
                    case "auth/user-disabled":
                    case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                    case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
                }
            });
    }

    const handleSignUp = () =>{
        clearErrors();
        firebase
            .auth()
            .createUserWithEmailAndPassword(email, password)
            .catch(err =>{
                switch(err.code){
                    case "auth/email-already-in-use":
                    case "auth/invalid-email":
                    
                    setEmailError(err.message);
                    break;
                    case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
                }
            });
    };

    const handleLogout = () =>{
        firebase.auth().signOut();
    };

    const authListener = () =>{
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                clearErrors();
                setUser(user);

            }else{
                setUser("");
            }
        });
    };

    useEffect( () =>{
        // setUser("");
             authListener();
  
    }, []);
    
    
    return (
        <>
        
        {user ? (
            <Hero 
                email={email}
                setEmail={setEmail}
                handleLogout={handleLogout}
            />
        ):(
            <Login 
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword = {setPassword}
            handleLogin = {handleLogin}
            handleSignUp = {handleSignUp}
            hasAccount = {hasAccount}
            setHasAccount = {setHasAccount}
            emailError = {emailError}
            passwordError = {passwordError}
            
            />
            
        )}
        
        </>

    );
};
export default LoginHome;