class Add
{
    setAdd(a,b)
    {
        this.a=a;
        this.b=b;
    }
    addData()
    {
        this.c=this.a+this.b;
    }
    getAdd()
    {
        return this;
    }
}
var obj = new Add();
obj.setAdd(10,20);
obj.addData();
var res = obj.getAdd();

console.log("a = "+res['a']);
console.log("b = "+res['b']);
console.log("add = "+res['c']);