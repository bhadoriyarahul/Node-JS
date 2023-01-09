/* url routing : redirection of one url path 
to another */

import http from 'http';
import url from 'url';

http.createServer((req,res)=>{
 var urlObj=url.parse(req.url,true);
 console.log(urlObj);     
 var url_route="<h2>Click on the link below to redirect</h2><a href='/home'>Home page</a><br/><a href='/about'>About page</a><br/><a href='/contact'>Contact page</a><br/><a href='/service'>Service page</a><br/><a href='/register'>Register page</a><br/><a href='/login'>Login page</a>";
 var response_msg;
 if(urlObj.pathname=="/" || urlObj.pathname=="/home")
    response_msg="<h1>/ or /home url invoked</h1>";
 else if(urlObj.pathname=="/about")
    response_msg="<h1>/about url invoked</h1>";
 else if(urlObj.pathname=="/contact")
    response_msg="<h1>/contact url invoked</h1>";
 else if(urlObj.pathname=="/service")
    response_msg="<h1>/service url invoked</h1>";
 else if(urlObj.pathname=="/register")
    response_msg="<h1>/register url invoked</h1>";
 else if(urlObj.pathname=="/login")
 {
    console.log("User Details");
    console.log("Username :"+urlObj.query.username);
    console.log("Password :"+urlObj.query.password);        
    response_msg="<h1>/login url invoked</h1>";   
 }
 else
    response_msg="<h1>Invalid url invoked</h1>";   
 res.write(response_msg+url_route);
 res.end();
}).listen(8081);
console.log("server invoked at link http://localhost:8081");