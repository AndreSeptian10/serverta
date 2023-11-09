const firebase = require('firebase');


// Initialize Firebase with your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBxfaRILvmexo-W9KuzciuJ3FxWHnwUK94",
  authDomain: "smarthometa-5dabc.firebaseapp.com",
  databaseURL: "https://smarthometa-5dabc-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "smarthometa-5dabc",
  storageBucket: "smarthometa-5dabc.appspot.com",
  messagingSenderId: "138264197377",
  appId: "1:138264197377:web:208af92a187ce971450300",
  measurementId: "G-HTD086RJMN"
};

firebase.initializeApp(firebaseConfig);

// Get a reference to the database
const database = firebase.database();
// firebaseDB.ref("P1").set("1")



