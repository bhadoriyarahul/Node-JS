import fs from 'fs';
console.log("Before file operation");
var file_content="Hello The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript Hello";

/*fs.exists("data21.txt",(status)=>{
 if(status)
  console.log("file exists.....");
 else
  console.log("file not exists.....");     
});*/
var status=fs.existsSync("data2.txt");
if(status)
console.log("file exists.....");
else
console.log("file not exists.....");
console.log("After file operation");