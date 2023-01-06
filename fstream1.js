//readable stream
import fs from 'fs';
var readStream = fs.createReadStream("data.txt");

console.log("Before file operation");

var data="";
readStream.on("data",(chunk)=>{
 data+=chunk;
});

readStream.on("end",()=>{
 console.log("Content read successfully.....");
 console.log(data);
});

readStream.on("error",(error)=>{
 console.log(error);
});

console.log("After file operation");