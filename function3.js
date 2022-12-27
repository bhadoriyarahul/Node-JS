console.log("Before function execution");
function demo(cb)
{
    console.log("demo function executed");
    setTimeout(cb,3000);
}

demo(()=>{
console.log("demo , callback function executed");
});
console.log("After function execution");