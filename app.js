const express = require('express')
const app = express()
const port = 3000;
// const ofirebase = require("./senddata")


app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.listen(port,function(err,data){
    if(err)
        console.log(err);
    else
        console.log("connected");
});

// app.post("/savedata",function(req){
//     ofirebase.saveData(req.body, function(err,data){

//     });
// })