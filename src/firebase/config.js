import firebase from "firebase/app";
import 'firebase/firestore'


// Your web app's Firebase configuration 
const firebaseConfig = { 
  apiKey: "AIzaSyChW3BBEp_QrybNYb7fRTWYq5a-Yy0zgpM",
  authDomain: "wolfgymrcjs.firebaseapp.com",
  projectId: "wolfgymrcjs",
  storageBucket: "wolfgymrcjs.appspot.com",
  messagingSenderId: "392005985201",
  appId: "1:392005985201:web:9bc15e6ca99f92d5391390"
};

// Inicializamos la app 
const app = firebase.initializeApp(firebaseConfig)

export const getFirestore = () =>{
    return firebase.firestore(app)
}