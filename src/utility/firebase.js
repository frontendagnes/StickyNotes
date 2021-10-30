import firebase from 'firebase/app';
import "firebase/database"
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyCt17qktZRRDcklajeNyoGYf25lB271tUw",
    authDomain: "yellow-sticky-notes.firebaseapp.com",
    projectId: "yellow-sticky-notes",
    storageBucket: "yellow-sticky-notes.appspot.com",
    messagingSenderId: "930303478862",
    appId: "1:930303478862:web:e5e73ff9de3e776239071f"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const api = firebaseApp.firestore();
// const api = firebase.database();

export default api;