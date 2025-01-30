
class MyClass{
    myMethod(p1,p2,p3){
        if(arguments.length===1){
            console.log('recived one Arguments:',p1);
        }
        else if(arguments.length===2){
            console.log('recived one Arguments:',p1,p2);
        }
        else if(arguments.length===3){
            console.log('recived one Arguments:',p1,p2,p3);
        }
    }
}

let Obj=new MyClass()
Obj.myMethod(1)
Obj.myMethod(1,2)
Obj.myMethod(1,2,3)