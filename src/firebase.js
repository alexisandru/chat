import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCRdKa-IOyqWg8p36U_lxvbm3UtJlOfFY4",
    authDomain: "fb-react-af077.firebaseapp.com",
    projectId: "fb-react-af077",
    storageBucket: "fb-react-af077.appspot.com",
    messagingSenderId: "352374886720",
    appId: "1:352374886720:web:866e47698ac06b9abfeaa5"
  };
  // Initialize Firebase
const fb = firebase.initializeApp(firebaseConfig);

export const db = fb.firestore()
export const auth = fb.auth()

export const googleSign = new firebase.auth.GoogleAuthProvider()
export const date = firebase.firestore.Timestamp;