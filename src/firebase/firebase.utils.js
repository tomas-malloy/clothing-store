import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
const config = {
  apiKey: "AIzaSyBr-YBXHbXdHBzvqK7tJPPzQpexXKeYCe8",
  authDomain: "crwn-db-b5064.firebaseapp.com",
  databaseURL: "https://crwn-db-b5064.firebaseio.com",
  projectId: "crwn-db-b5064",
  storageBucket: "crwn-db-b5064.appspot.com",
  messagingSenderId: "867005254323",
  appId: "1:867005254323:web:950e703f60f65467c7fec6",
  measurementId: "G-RYH96SZ7MV"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
