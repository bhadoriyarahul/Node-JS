console.log("Before function execution");

function demo()
{
    console.log("Demo function executed");
}
demo();
t=setTimeout(demo,3000);


clearTimeout(t);

console.log("After function execution");
