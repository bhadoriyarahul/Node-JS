import fs from 'fs';
console.log("Before file operation");
var file_content="Hello The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript Hello";

/*fs.appendFile("data2.txt",file_content,()=>{
    console.log("Content added in file.....");
});*/
fs.appendFileSync("data2.txt",file_content);
console.log("content added in file.....");

console.log("After File operation");