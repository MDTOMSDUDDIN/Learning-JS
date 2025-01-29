let person= new Object();
person.first_name="tomas";
person.last_name="uddin";
person.age=23;
person.isBangladeshi=true;

person.getName=()=>{
    return "my name is $(person.first_name)";
}

// console.log(person.first_name);
// console.log(person.getName);
console.log(person);
