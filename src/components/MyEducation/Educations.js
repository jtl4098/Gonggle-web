import React, {useState, useEffect} from "react";
import firebase from '../../firebase';
import {Card} from "react-bootstrap";
import { Button } from "react-bootstrap";
import {Link} from 'react-router-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import MyCourse from "../MyCourse/MyCourse";

import './Educations.css'
import Hero from "../Login/Hero";

const database = firebase.firestore();


const Educations = (props) => {
   
    const {email,eduIds, setEduIds,user,setEmail, setUser, handleLogout} = props;
    
    const [educations, setEducations] = useState([]);
    const [loading, setLoading] = useState(false);
    const [renderEducation, setRenderEducation] = useState(false);
    const [educationId, setEducationId] = useState('');

    const onClickRender =(id) =>{
        
        setRenderEducation(true);
        setEducationId(id);
        console.log(id);

    }

    
    useEffect( () =>{
           
        
        database.collection('educations').where('eduId', 'in', eduIds).onSnapshot( edus =>{
        setEducations(edus.docs.map(doc=> doc.data()))
        console.log(educations)
        setLoading(true)
        })
                 
        
    },[])

    const renderCard = (card, index) =>{
        

        return(
            <Card style={{ width: '18rem' }} class="card" key ={index}>
                <Card.Img variant="top" src="https://i.picsum.photos/id/0/5616/3744.jpg?hmac=3GAAioiQziMGEtLbfrdbcoenXoWAW-zlyEAMkfEdBzQ" />
                <Card.Body>
                <Card.Title>{card.eduName}</Card.Title>
                <Card.Text>
                    {card.info}
                </Card.Text>
                
                <Button variant="primary" onClick={ () => onClickRender(card.eduId)}>관리하기</Button>
                
                </Card.Body>
            </Card>
        )
    }

    return(
        
        
        <>
        {loading ? (
            <>
            {renderEducation ? (
                // <MyCourse
                //     educationId = {educationId}
                //     setEducationId = {setEducationId}

                // />
                <Hero 
                    email={email}
                    setEmail={setEmail}
                    user = {user}
                    setUser = {setUser}
                    handleLogout={handleLogout}
                    educationId = {educationId}
                    setEducationId = {setEducationId}
                />
               
            ):(
                <div className="row">
                {educations.map(renderCard)}   
    
               
                </div> 
            )}
            </>
        ):(
            <p></p>
        )}
            

        
        </>
    )
}

export default Educations;