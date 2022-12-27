function Employee()
{
    this.eno=1001;
    this.enm="Jarvis";
    this.esal=10000.67;
    this.edes="admin";

    this.showDetails=()=>{
        console.log("Employee Details");
        console.log("Eno :"+this.eno);
        console.log("Enm :"+this.esal);
        console.log("Edes :"+this.edes);
    }
}

var obj = new Employee();
obj.showDetails();