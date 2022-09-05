'use strict';
const express = require('express');
const app=express();
const cors = require ('cors');

app.use(express.json());
app.use(cors());

app.get('/',(req,res)=>res.send('Hello World'));

app.post('/person',(req,res)=>{
    //const {name,gender,age}=req.query;
    const {age}=req.body;
    let newAge=parseInt(age)+5;
   //res.send({name:name , gender:gender , age:newAge});
     res.send(`${newAge}`);
})

function start (port){
    app.listen(port,()=>console.log(`server is running on port ${port}`))
}
module.exports={app,start}