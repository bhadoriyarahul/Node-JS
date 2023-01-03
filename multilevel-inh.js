class A 
{
    aData()
    {
        console.log("class A , aData method invoked");
    }
}
class B extends A 
{
    bData()
    {
        console.log("class B , bData method invoked");
    }
}
class C extends B 
{
    cData()
    {
        console.log("class C , cData method invoked");
    }
}
var obj = new C();
obj.aData();
obj.bData();
obj.cData();