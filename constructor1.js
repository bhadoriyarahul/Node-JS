//constructor : Default or 0-parametrized constructor

class Employee
{
 constructor(eno,enm)
 {
  this.eno=eno;
  this.enm=enm;
 }
 setEmployee(eno,enm)
 {
  this.eno=eno;
  this.enm=enm;
 }
 getEmployee()
 {
  console.log("Eno = "+this.eno);
  console.log("Enm = "+this.enm); 
 }    
}

var obj = new
Employee(0,null);

obj.getEmployee();

obj.setEmployee(1001,"John");
obj.getEmployee();

