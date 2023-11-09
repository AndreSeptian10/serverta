const spawn = require('child_process').spawn;
const input = "turn on living room";
const process = spawn('python',['./cosine.py', input]);

let outputData= "";

process.stdout.on('data',data=> {
    const output = data.toString();
    outputData += output;
});

process.stderr.on('data', (data) => {
    console.error('Kesalahan dari skrip Python:', data.toString());
  });

  process.on('close', (code) => {
    console.log('Output dari skrip Python:', outputData);
  });
  