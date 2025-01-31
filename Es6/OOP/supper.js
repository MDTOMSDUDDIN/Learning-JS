class parent{
    name(){
        console.log("this is a parent class ");
     }
    }
    
    class child extends parent{
     fun(){
        super.name();
     }
    }
    
    let Obj=new child()
    Obj.fun()