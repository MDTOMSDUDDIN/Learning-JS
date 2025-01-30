
class father{
    num1=10;
    num2=20;
    AddTwoNum(){
        let sum=this.num1+this.num2;
        console.log(sum);
    }
}

class Son extends father{

}


let  ObjSon=new Son()
ObjSon.AddTwoNum()
console.log(ObjSon.num1)