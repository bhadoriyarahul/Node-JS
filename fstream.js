//writable stream
import fs from 'fs';
var writeStream = fs.createWriteStream("data.txt");

console.log("Before file operation");

var file_content="Hello The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript Hello";
writeStream.write(file_content);
writeStream.end();

writeStream.on("finish",()=>{

console.log("Content added in file.....");
});
 writeStream.on("error",(error)=>{
    console.log(error);
 });

 console.log("After file operation");