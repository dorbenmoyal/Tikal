

const express = require('express');
const app=express();
const bodyParser = require('body-parser')

//Define the message controller Route
const messagingRoute = require('./controllers/messagingController')

app.use(bodyParser.json());

app.use('/messaging',messagingRoute);

app.get('/',(req,res)=>{
    res.send('Server Works..!');
});



app.listen(3000,()=> console.log('listening on port 3000....'));