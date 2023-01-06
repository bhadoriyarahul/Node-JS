import fs from 'fs';
console.log("Before file operation");
var file_content="Hello The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript Hello";

/*fs.unlink("data1.txt",(error)=>{
 if(error)
  console.log("File not found....");
 else
  console.log("File deleted successfully...."); 
});*/

var 
response=fs.unlinkSync("data2.txt");

console.log("File deleted successfully....");

console.log("After file operation");