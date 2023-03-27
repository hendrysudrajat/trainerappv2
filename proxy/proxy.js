const express=require('express');

const app=express();
const port=process.env.PORT||4000;
console.log(process.env)


app.get("/",(req,res)=>{
    res.send("ok");
})
app.get('/trainerproxy/test',(req,res)=>{
    console.log(req.user);
    res.send('OK');
})

app.get('/trainerproxy/',(req,res)=>{
    console.log(req.user);
    res.send('OK');
})

app.listen(port,()=>{
    console.log("listening at port"+port)
})