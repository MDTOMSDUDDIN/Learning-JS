
function person(){
    this.first_name="tomas"
    this.lastname="uddin"
    this.age=123
    this.city="dhaka"
    this.isbangladeshi=true

    this.getName=()=>{
        return 'my name is ${this.first_name} ${this.lastname}';
    }
}

let constructorInstance=new person();

// console.log(constructorInstance.first_name)
console.log(constructorInstance)