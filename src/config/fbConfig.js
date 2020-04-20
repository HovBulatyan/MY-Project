import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'





var firebaseConfig = {
    apiKey: "AIzaSyAFP5GcoBb5Jx-ZR3A3THUpVkzrmUv_AOE",
    authDomain: "my-project-plan-346ba.firebaseapp.com",
    databaseURL: "https://my-project-plan-346ba.firebaseio.com",
    projectId: "my-project-plan-346ba",
    storageBucket: "my-project-plan-346ba.appspot.com",
    messagingSenderId: "590891282571",
    appId: "1:590891282571:web:d331183184e632c0dce48e",
    measurementId: "G-RF1TWPZXDQ"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({timestampsInSnapshots: true})


  export default firebase;