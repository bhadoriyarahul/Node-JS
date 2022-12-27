console.log("Before function execution");
function demo(a,b,cb)
{
    var c=a+b;
    console.log("demo function executed");
    setTimeout(()=>{
        cb(c);
    },3000);
}
var a,b;
a=400;
b=200;
 demo(a,b,(result)=>{
    console.log("demo callback function executed , add = "+result);
 });
 console.log("After function executed");