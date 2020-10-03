import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyD8xg1EMGGaswZSdao4ISh-7eQcqV2s0bs",
    authDomain: "facebook-f2f1d.firebaseapp.com",
    databaseURL: "https://facebook-f2f1d.firebaseio.com",
    projectId: "facebook-f2f1d",
    storageBucket: "facebook-f2f1d.appspot.com",
    messagingSenderId: "854984866908",
    appId: "1:854984866908:web:632ef6feb2af3596723a99",
    measurementId: "G-4Q448RVHM8"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db  = firebaseApp.firestore();
 export const auth = firebaseApp.auth();
 export const provider = new firebase.auth.GoogleAuthProvider();
  export default db;
