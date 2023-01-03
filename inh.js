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
  var obj = new B();
  obj.aData();
  obj.bData();