class Employee 
{
    #eno;
    #enm;

setEmployee(eno,enm)
{
    this.#eno=eno;
    this.#enm=enm;
}
getEmployee()
{
    console.log("Eno = "+this.#eno);
    console.log("Enm = "+this.#enm);
 }
}
var obj = new Employee();
obj.setEmployee(1001,"John");
obj.getEmployee();