/* template page loading   */
/* client side code + server side code */

import http from 'http';
import fs from 'fs';

http.createServer((req,res)=>{
 var data=fs.readFileSync("./views/demo.html");
 res.write(data);
 res.end();
}).listen(8081);
console.log("server invoked at link http://localhost:8081");