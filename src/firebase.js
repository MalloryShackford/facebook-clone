import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCnqPQW3K25jz7-7uoHPPZQxK0ITSPMDpU",
  authDomain: "fb-clone-b32f6.firebaseapp.com",
  projectId: "fb-clone-b32f6",
  storageBucket: "fb-clone-b32f6.appspot.com",
  messagingSenderId: "247796573965",
  appId: "1:247796573965:web:4bc652fc1b03a2cc1b7244",
  measurementId: "G-646G30SD1M"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;