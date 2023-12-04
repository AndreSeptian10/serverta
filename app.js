// const express = require('express');
// const bodyParser = require('body-parser');
// const app = express();

// app.use(bodyParser.json());

// // Rute untuk menangani hasil suara
// app.post('/voice', (req, res) => {
//     const voiceResult = req.body.voiceResult;
//     console.log('Voice Result:', voiceResult);
//     // Lakukan sesuatu dengan hasil suara, misalnya simpan di database atau lakukan operasi lainnya.
//     res.status(200).json({ message: 'Voice result received successfully.' });
// });



// const port = 3000; // Ganti dengan port yang Anda inginkan
// app.listen(port, () => {
//     console.log(`Server berjalan di http://localhost:${port}`);
// });

const express = require('express');
const bodyParser = require('body-parser');
const app = express();

// Gunakan body-parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Handler untuk endpoint '/voice'
app.post('/voice', (req, res) => {
  // Dapatkan data suara dari body
  const voiceData = req.body.voice_data;
  
  // Lakukan sesuatu dengan voiceData
  console.log('Voice Data:', voiceData);

  // Kirim respons kembali ke Android
  res.send('Voice Result: Success');
});

// Mulai server
const port = 3000;
app.listen(port, () => {
  console.log(`Server berjalan di port ${port}`);
});
