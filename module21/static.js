class person{
  static  first_name="tomas";
   static last_name="uddin";

    static getName(){
        return `my name is ${this.first_name} ${this.last_name}`;
    }
}

// let Obj=new person()

console.log(person.first_name);
console.log(person.last_name);
console.log(person.getName());
// console.log(Obj.getName());