//duplex stream
import fs from 'fs';
var readStream = fs.createReadStream("data.txt");
var writeStream = fs.createWriteStream("newdata.txt");

console.log("Before file operation");

readStream.pipe(writeStream);
console.log("trask done......");

console.log("After file operation");