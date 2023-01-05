import fs from 'fs';
console.log("Before file operation");
var file_content="Hello The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript Hello";
fs.writeFileSync("data1.txt",file_content);
console.log("After added in file.....");

console.log("After file operation");