
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set } = require('firebase/database');

// TODO: Replace the following with your app's Firebase project configuration
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

const firebaseApp = initializeApp(firebaseConfig);
const database = getDatabase(firebaseApp);
const firebaseRef = ref(database, 'STATUS_LAMPU');

// Data yang akan disimpan
const newData = {
 value : 1
};

// Simpan data ke Firebase
set(firebaseRef, newData)
  .then(() => {
    console.log('Data berhasil disimpan di Firebase.');
  })
  .catch((error) => {
    console.error('Error menyimpan data:', error);
  });
