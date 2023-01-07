import http from 'http';

http.createServer((req,res)=>{

    console.log(req);
    res.writeHead(200, {"Content - Type":"text/html"});

    res.write("<h1>Welcome to NodeJs server side</h1>");

    res.write("<h2>It is response header management</h2>");
    res.end();
}).listen(8081);
console.log("server invoked at link http://localhost:8081");