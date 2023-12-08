const express = require('express');
const bodyParser = require('body-parser');
const { spawn } = require('child_process');
const axios = require('axios')

const slug = require('slug');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));



// Handler untuk endpoint '/voice'
app.post('/offline', (req, res) => {
  // Dapatkan data suara dari body
  const voiceData = req.body.voice_data;
  
  // Lakukan sesuatu dengan voiceData
  console.log('Perintah dari user:', voiceData);

  // Jalankan skrip Python dengan nilai voiceData sebagai input
  const process = spawn('python', ['./cosine.py', voiceData]);

  let outputDatasuara = "";
  let newValue = 0;

  process.stdout.on('data', data => {
    const output = data.toString();
    outputDatasuara += output;
  });

  process.stderr.on('data', (data) => {
    console.error('Kesalahan dari skrip Python:', data.toString());
  });

  process.on('close', (code) => {
    console.log('Hasil text Processing:', outputDatasuara);

    let tmp = slug(outputDatasuara, '_');

    let url;

    switch (tmp) {
        case "matikan_lampu":
            url = "http://192.168.8.114/LampOff";
            break;
        case "nyalakan_lampu":
            url = "http://192.168.8.114/LampOn";
            break;
        case "matikan_kipas_angin":
            url = "http://192.168.8.114/FanOff";
            break;
        case "nyalakan_kipas_angin":
            url = "http://192.168.8.114/FanOn";
            break;
        case "tutup_pintu":
            url = "http://192.168.8.114/DoorCl";
            break;
        case "buka_pintu":
            url = "http://192.168.8.114/DoorOp";
            break;
        default:
            // Handle default case if needed
            break;
    }

    // Mengirim HTTP request ke URL yang sesuai
    if (url) {
        // Gunakan library atau modul Node.js seperti 'axios' atau 'node-fetch' untuk mengirim HTTP request
        // Contoh dengan 'axios':
        axios.get(url)
            .then(response => {
                console.log('HTTP request berhasil:', response.data);
            })
            .catch(error => {
                console.error('Error dalam HTTP request:', error);
            });
    }

    // Kirim respons kembali ke Android
    res.send('Voice Result: Success');
  });
});

// Mulai server
const port = 3030;
const ip = '192.168.154.156';
app.listen(port,ip, () => {
  console.log(`Server is running on http://${ip}:${port}`);
});
