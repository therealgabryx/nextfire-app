import firebase from 'firebase/app' 
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage' 

const firebaseConfig = {
    apiKey: "AIzaSyCLERkrmo99hshXvlSq7fCy6UOqxl31lSA",
    authDomain: "nextfire-f66e3.firebaseapp.com",
    projectId: "nextfire-f66e3",
    storageBucket: "nextfire-f66e3.appspot.com",
    messagingSenderId: "348219031736",
    appId: "1:348219031736:web:8cbed55fa785576f37b44d",
    measurementId: "G-H4Q0YCQKR6" 
} 

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig) 
}

export const auth = firebase.auth() 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

export const firestore = firebase.firestore() 
export const storage = firebase.storage()  