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
class C extends A
{
    cData()
    {
        console.log("class C , cData method invoked");
    }
}
var obj = new B();
obj.aData();
obj.bData();

var obj1 = new C ();
obj1.aData();
obj1.cData();