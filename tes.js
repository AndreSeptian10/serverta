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