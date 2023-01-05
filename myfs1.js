import fs from 'fs';
console.log("Before file operation");

/*fs.readFile("data11.txt",(error,data)=>{
 if(error)
  console.log(error);    
 else
 {
  //console.log("File content : "+data);
  console.log(data.toString()); 
 } 
});*/

var data=fs.readFileSync("data11.txt");
console.log("File content : "+data);

console.log("After file operation");