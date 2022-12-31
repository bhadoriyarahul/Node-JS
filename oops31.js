

class Add
{
 getData()
 {
     
  this.a=40;
  this.b=20;
 }   
 addData()
 {
  this.c = this.a+this.b; 
 }    
 showData()
 {
  console.log("a = "+this.a);
  console.log("b = "+this.b);
  console.log("add = "+this.c);    
 }
}

var obj = new Add();
obj.getData();
obj.addData();
obj.showData();