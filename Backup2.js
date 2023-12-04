const spawn = require('child_process').spawn;
const input = "nyalakan kipas";
const process = spawn('python',['./cosine.py', input]);
const { initializeApp } = require('firebase/app');
const { getDatabase, ref, set } = require('firebase/database');
var slug = require('slug')

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
const database = getDatabase(firebaseApp);``
const firebaseReflampuu = ref(database, 'STATUS_LAMPU');
const firebaseRefdoor = ref(database, 'STATUS_DOOR');
const firebaseRefkipas = ref(database, 'STATUS_KIPAS');



let outputDatasuara= "";
let newValue = 0;

process.stdout.on('data',data=> {
    const output = data.toString();
    outputDatasuara += output;
});

process.stderr.on('data', (data) => {
    console.error('Kesalahan dari skrip Python:', data.toString());
  });

  process.on('close', (ocde) => {
    console.log('Output command:', outputDatasuara);

    let tmp = slug(outputDatasuara,'_');

    // console.log(tmp);

    switch (tmp) {
      case "matikan_lampu_kamar_tidur":
        newValue = 0;
        break;
      case "nyalakan_lampu_kamar_tidur":
        newValue = 1;
        break;
        case "matikan_kipas_angin":
        newValue = 0;
        break;
      case "nyalakan_kipas_angin":
        newValue = 1;
        break;
        case "tutup_pintu":
        newValue = 0;
        break;
      case "buka_pintu":
        newValue = 1;
        break;
      default:
        // Handle default case if needed
        break;
    }
    if(tmp.includes("pintu")){
      set(firebaseRefdoor, newValue)
      .then(() => {
        console.log('Data pintu.', newValue);
      })
      .catch((error) => {
        console.error('Error menyimpan data:', error);
    });
    }
    else if(tmp.includes("kipas")){
      set(firebaseRefkipas, newValue)
      .then(() => {
        console.log('Data kipas.', newValue);
      })
      .catch((error) => {
        console.error('Error menyimpan data:', error);
    });
    }
    else if(tmp.includes("lampu")){
      set(firebaseReflampuu, newValue)
      .then(() => {
        console.log('Data lampu.', newValue);
      })
      .catch((error) => {
        console.error('Error menyimpan data:', error);
    });
    }
});
  