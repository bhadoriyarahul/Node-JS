/* static content loading : css + images + font */


import http from 'http';
import fs from 'fs';

http.createServer((req,res)=>{
 var data=fs.readFileSync("./views/newdemo.html");
 res.write(data);
 res.end();
}).listen(8081);
console.log("server invoked at link http://localhost:8081");