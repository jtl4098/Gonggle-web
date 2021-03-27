
import firebase from 'firebase';


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyC0H3Lo-rhaZd0nZngYASUCbtiSHXtAC-k",
    authDomain: "hakwon-6a31c.firebaseapp.com",
    databaseURL: "https://hakwon-6a31c.firebaseio.com",
    projectId: "hakwon-6a31c",
    storageBucket: "hakwon-6a31c.appspot.com",
    messagingSenderId: "152572427026",
    appId: "1:152572427026:web:f48c5913012e5b921311cb",
    measurementId: "G-K13T42S22X"
  };

  const fire = firebase.initializeApp(firebaseConfig);

  export default fire;