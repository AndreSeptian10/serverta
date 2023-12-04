const spawn = require('child_process').spawn;
const input = "nyalakan Kamar tidur";
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
const firebaseReflampuu = ref(database, 'STATUS_KIPAS');
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
    console.log('Output dari skrip dwqdwq:', outputDatasuara);

    let tmp = slug(outputDatasuara,'_');

    // console.log(tmp);

    if(tmp == "matikan_lampu_kamar_tidur"){
      newValue = 0;
      
    }else if(tmp == "nyalakan_lampu_kamar_tidur"){
        newValue = 1;
    }
    set(firebaseReflampuu, newValue)
  .then(() => {
    console.log('Data berhasil disimpan di Firebase.', newValue);
  })
  .catch((error) => {
    console.error('Error menyimpan data:', error);
  });
  });


  var express = require('express');
// const bodyParser = require('body-parser');
var app = express();

// app.use(bodyParser.json());

// // Rute untuk menangani hasil suara
// app.post('/voice', (req, res) => {
//     const voiceResult = req.body.voiceResult;
//     console.log('Voice Result:', voiceResult);
//     // Lakukan sesuatu dengan hasil suara, misalnya simpan di database atau lakukan operasi lainnya.
//     res.status(200).json({ message: 'Voice result received successfully.' });
// });

// const port = 5555; // Ganti dengan port yang Anda inginkan
// app.listen(port, () => {
//     console.log(`Server berjalan di http://localhost:${port}`);
// });

app.get('/getData',function(req,res){
    res.status(200).send({
        success:"true",
        name:"serverta",
        response:"working"
    })
});

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`server runing on port no ${PORT}`)
});