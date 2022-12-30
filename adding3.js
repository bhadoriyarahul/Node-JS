function 
calculate (choice,...args)
{
    var res;
    if(choice == "add")
    {
        res=args[0]+args[1];
        console.log("Add = "+res);
    }
    else if(choice == "sub")
    {
        res=args[0]-args[1];
        console.log("sub = "+res);
    }
    else
    console.log("Invalid choice");
}
 calculate("add",10,5);
 calculate("sub",15,8);