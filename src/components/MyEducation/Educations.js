import React, {useState, useEffect} from "react";
import firebase from '../../firebase';
import {Card} from "react-bootstrap";
import { Button } from "react-bootstrap";
import './Educations.css'
const database = firebase.firestore();


const Educations = (props) => {
   
    const {email,eduIds, setEduIds} = props;
    
    const [educations, setEducations] = useState([]);
    const [loading, setLoading] = useState(false);
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
                <Button variant="primary">관리하기</Button>
                
                </Card.Body>
            </Card>
        )
    }

    return(
        
        
        <>
        {loading ? (
            <div className="row">
            {educations.map(renderCard)}   
            </div> 
        ):(
            <p></p>
        )}
            

        
        </>
    )
}

export default Educations;