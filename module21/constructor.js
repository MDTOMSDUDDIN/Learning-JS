class person{

    num1=10;
    num2=20;
    addTwoNum(){
        return this.num1+this.num2;
    }

    constructor(){
        console.log('i am constructor call auto run');
    }
}

let personObj=new person();