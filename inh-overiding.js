class A
{
    Data()
    {
        console.log("class A , Data method invoked");
    }
    aData()
    {
        console.log("class A , aData method invoked");
    }
}
class B extends A 
{
    Data()
    {
        console.log("class B , Data method invoked");
    }
    bData()
    {
        console.log("class B , bData method invoked");
    }
}
var obj = new B();
obj.aData();
obj.bData();
obj.Data();