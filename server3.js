import http from 'http';

http.createServer((req,res)=>{
 console.log(req.url);
 console.log(req.method);    
 res.write("<h1>Welcome to NodeJS server side</h1>");
 res.end();
}).listen(8081);
console.log("server invoked at link http://localhost:8081");