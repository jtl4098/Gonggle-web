import React, {useState, useEffect} from "react";

import {Card} from "react-bootstrap";
import firebase from '../../firebase';
import MyEducation from '../MyEducation/MyEducation';
import { Button } from "react-bootstrap";


const database = firebase.firestore();
const MyCourse = (props) => {
    const {educationId, setEducationid} = props;
    
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () =>{
           
        
        database.collection('educations').doc(educationId).collection('educations_course').onSnapshot( dbCourses =>{
        setCourses(dbCourses.docs.map(doc=> doc.data()))
        console.log(dbCourses)
        setLoading(true)
        })
                 
    },[])
    
    const renderCard = (card, index) =>{
        

        return(
            <Card style={{ width: '18rem' }} class="card" key ={index}>
                <Card.Img variant="top" src="https://i.picsum.photos/id/180/2400/1600.jpg?hmac=Ig-CXcpNdmh51k3kXpNqNqcDYTwXCIaonYiBOnLXBb8" />
                <Card.Body>
                <Card.Title>{card.courseName}</Card.Title>
                <Card.Text>
                    {card.target}
                </Card.Text>
                
                <Button variant="primary" >관리하기</Button>
                
                </Card.Body>
            </Card>
        )
    }


    return(

        
        <>
        {loading ? (
            <>
            
                <div className="row">
                {courses.map(renderCard)}   
    
               
                </div> 
           
            </>
        ):(
            <p></p>
        )}
            

        
        </>
    )
}

export default MyCourse;