
class person{
    num1=10;
    num2=20;

    constructor(a,b){
        this.num1=a;
        this.num2=b;
    }

    addTwoNum(){
        return this.num1+this.num2
    }
}

let personObj=new person(100,200);
console.log(personObj.addTwoNum());