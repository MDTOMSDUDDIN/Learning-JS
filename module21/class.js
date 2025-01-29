class person{
    first_name="tomas";
    last_name="uddin";
    age=123;
    city="dhaka";
    isBangladeshi=true;

    myfun(){
        return 'my name is $(this.first_name} ${this.last_name}';
    }

}

let ObjPerson=new person();
console.log(ObjPerson);