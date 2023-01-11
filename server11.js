/* url routing + method checking  */

import http from 'http';
import url from 'url';
import fs from 'fs';

http.createServer((req,res)=>{
 var urlObj=url.parse(req.url,true);
 var file_content;
 if(urlObj.pathname=="/" || urlObj.pathname=="/home")
    file_content=fs.readFileSync("./views/home.html");
 else if(urlObj.pathname=="/about")
    file_content=fs.readFileSync("./views/about.html");
 else if(urlObj.pathname=="/contact")
    file_content=fs.readFileSync("./views/contact.html");
 else if(urlObj.pathname=="/service")
    file_content=fs.readFileSync("./views/service.html");
 else if(urlObj.pathname=="/register")
    file_content=fs.readFileSync("./views/register.html");
 else if(urlObj.pathname=="/login")
    file_content=fs.readFileSync("./views/login.html");
 else
    file_content=fs.readFileSync("./views/error.html");   
 res.write(file_content);
 res.end();
}).listen(8081);
console.log("server invoked at link http://localhost:8081");