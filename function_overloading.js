/* Function overloading : Problem solution */
//default arguments

function add(a=0,b=0,c=0,d=0,e=0)
{
 var res=a+b+c+d+e;   
 console.log("Add = "+res);    
}

add();
add(10);
add(10,20);
add(10,20,30);
add(10,20,30,40);
add(10,20,30,40,50);