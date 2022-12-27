//prototype : collection of data members

function Employee()
{
 this.eno=1001;
 this.enm="Jarvis";
 this.esal=10000.67;
 this.edes="admin";  
}

var obj = new Employee();
//console.log(obj);
console.log("Employee Details");
console.log("Eno :"+obj.eno);
console.log("Enm :"+obj.enm);
console.log("Esal :"+obj.esal);
console.log("Edes :"+obj.edes);
