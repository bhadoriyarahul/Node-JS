import http from 'http';

const
server=http.createServer((request , response)=>{
    response.write("<h1>Welcome to NodeJs server side</h1>");
    response.end();
});

server.listen(8081, (error)=>{
    if(error)
    console.log(error);
    else
    console.log("server invoked at link http://localhost:8081");
})