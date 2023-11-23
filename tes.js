// Import Firebase modul
const firebase = require('firebase');

// Inisialisasi Firebase dengan konfigurasi proyek Firebase Anda
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


// Mendapatkan referensi ke Firebase Realtime Database
const database = firebase.database();
const statusDoorRef = database.ref('/STATUS_DOOR');

// Ganti nilai path `/STATUS_DOOR` menjadi 1
statusDoorRef.set(1)
  .then(() => {
    console.log('Status pintu berhasil diubah menjadi 1');
  })
  .catch((error) => {
    console.error('Gagal mengubah status pintu:', error);
  });
