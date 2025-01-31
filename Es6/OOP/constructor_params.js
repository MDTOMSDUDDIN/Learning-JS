class person{

    constructor(a,b){
        this.num1=a;
        this.num2=b;
    }
    
    addTwo(){
       let result=this.num1+this.num2;
       console.log(result);
    }
}

let Obj=new person(10,20)
Obj.addTwo()