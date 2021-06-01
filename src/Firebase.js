import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCPsP2a1FF25PHCQ9c_BnLvFfTaL5XtqXo",
  authDomain: "trader-asx.firebaseapp.com",
  projectId: "trader-asx",
  storageBucket: "trader-asx.appspot.com",
  messagingSenderId: "436570910579",
  appId: "1:436570910579:web:f560a780ee9a22dfd41f06",
  measurementId: "G-VX4ECQCVXK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
