//oops : setter & getter methods
//setter : used to set value to class params
//getter : used to get value of class params

class Add
{
 setA(a)
 {
  this.a=a;    
 }
 setB(b)
 {
  this.b=b;    
 } 
 addData()
 {
  this.c=this.a+this.b;    
 }    
 getA()
 {
  return this.a;    
 }
 getB()
 {
  return this.b;    
 }
 getC()
 {
  return this.c;    
 }
}

var obj = new Add();
obj.setA(20);
obj.setB(20);
obj.addData();
console.log("a = "+obj.getA());
console.log("b = "+obj.getB());
console.log("add = "+obj.getC());