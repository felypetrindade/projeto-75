import firebase from "firebase";
require("@firebase/firestore");

var firebaseConfig = {
  apiKey: "AIzaSyBoA5CcihpsSIHPENfPhJ-C_7Yu_bemPjM",
  authDomain: "teste-deb62.firebaseapp.com",
  projectId: "teste-deb62",
  storageBucket: "teste-deb62.appspot.com",
  messagingSenderId: "332798908101",
  appId: "1:332798908101:web:8b050b2340460274c702ac"
};

firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
