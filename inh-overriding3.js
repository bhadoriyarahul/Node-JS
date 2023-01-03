class A
{
    constructor()
    {
        console.log("class a , constructor method invoked");
    }
    aData()
    {
        console.log("class A , aData method invoked");
    }
}
class B extends A 
{
    constructor()
    {
        super();
        console.log("class  B , constructor method invoked");
    }
    bData()
    {
        console.log("class B , bData method invoked");
    }
}
var obj = new B();
obj.aData();
obj.bData();