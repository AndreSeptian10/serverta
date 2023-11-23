const { initializeApp } = require('firebase/app')
const config = require('./config');

// const db = initializeApp(config.firebaseConfig);
const database = getDatabase(firebaseApp);
const {firebaseConfig} = require('./config');

database.ref("P1").set("1")