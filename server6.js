/* If data is attached in url , routing as 
per url path will be affected. To make URL 
routing url is to be parsed. */

import http from 'http';

http.createServer((req,res)=>{
 var url_route="<h2>Click on the link below to redirect</h2><a href='/home'>Home page</a><br/><a href='/about'>About page</a><br/><a href='/contact'>Contact page</a><br/><a href='/service'>Service page</a><br/><a href='/register'>Register page</a><br/><a href='/login'>Login page</a>";
 var response_msg;
 if(req.url=="/" || req.url=="/home")
    response_msg="<h1>/ or /home url invoked</h1>";
 else if(req.url=="/about")
    response_msg="<h1>/about url invoked</h1>";
 else if(req.url=="/contact")
    response_msg="<h1>/contact url invoked</h1>";
 else if(req.url=="/service")
    response_msg="<h1>/service url invoked</h1>";
 else if(req.url=="/register")
    response_msg="<h1>/register url invoked</h1>";
 else if(req.url=="/login")
    response_msg="<h1>/login url invoked</h1>";   
 else
    response_msg="<h1>Invalid url invoked</h1>";   
 res.write(response_msg+url_route);
 res.end();
}).listen(8081);
console.log("server invoked at link http://localhost:8081");