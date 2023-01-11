import express from 'express';

var app = express();

app.get("/",(req,res)=>{
 res.send("<h1>Welcome to world of express</h1>");
});

app.listen(3000);
console.log("Server invoked at link http://localhost:3000");