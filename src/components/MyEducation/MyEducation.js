import React, {useState, useEffect} from "react";
import firebase from '../../firebase';
import Educations from '../../components/MyEducation/Educations';

const database = firebase.firestore();


const MyEducation = (props) => {
    const {email, setEmail, user, setUser, handleLogout} = props;
    
    const [eduIds, setEduIds] = useState([]);
    const [loading, setLoading] = useState(false);


    const authListener = () =>{
        firebase.auth().onAuthStateChanged(user =>{
            if(user){
                
                database.collection('users').doc(user.ac.email).collection('users_course').onSnapshot( snapshot =>{
                    const fetchData = [];
                    snapshot.forEach(document =>{
                        fetchData.push(document.get("eduId"))
                        
                    })
                    setEduIds(fetchData)
                    //setEduIds(snapshot.docs.map(doc=>doc.data()))
                    console.log(eduIds)
                    setLoading(true)
                    
                    
                })

            }else{
                
       
            }
        });
    };

    useEffect( () =>{
        
        authListener();       

    },[])

    return(
        <>
        <div className="myEducation">
            { loading  ?  (
                <Educations 
                email = {email}
                eduIds = {eduIds}
                setEduIds = {setEduIds}
                user = {user}
                setEmail = {setEmail}
                setUser = {setUser}
                handleLogout={handleLogout}
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