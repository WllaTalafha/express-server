'use strict';
const express = require('express');
const app=express();

app.get('/',(req,res)=>res.send('Hello World'));

app.post('/person',(req,res)=>{
    const {name,age,gender}=req.query;
    let newAge=parseInt(age)+5;
    res.send({name:name , gender:gender , age:`after 5 years you will be ${newAge}`})
})

function start (port){
    app.listen(port,()=>console.log(`server is running on port ${port}`))
}
module.exports={app,start}