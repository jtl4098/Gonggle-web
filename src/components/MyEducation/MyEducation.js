import React, {useState, useEffect} from "react";
import firebase from '../../firebase';
import Educations from '../../components/MyEducation/Educations';

const database = firebase.firestore();


const MyEducation = (props) => {
    const {email, setEmail} = props;
    
    const [eduIds, setEduIds] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect( () =>{
        database.collection('users').doc(email).collection('users_course').onSnapshot( snapshot =>{
            const fetchData = [];
            snapshot.forEach(document =>{
                fetchData.push(document.get("eduId"))
               
            })
            setEduIds(fetchData)
            //setEduIds(snapshot.docs.map(doc=>doc.data()))
            console.log(eduIds)
            setLoading(true)
            
           
        })
                 
    },[])

    return(
        <>
        <div className="myEducation">
            { loading  ?  (
                <Educations 
                email = {email}
                eduIds = {eduIds}
                setEduIds = {setEduIds}
                 />
            ):
            (
            <p></p>
            )
               
            }
  
            
        
        </div>
        </>
    )
}

export default MyEducation;