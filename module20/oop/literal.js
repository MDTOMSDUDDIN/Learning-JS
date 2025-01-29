let person={
    first_name:"tomas",
    last_name:"uddin",
    age:19,
    city:"dhaka",
    isBangladeshi:true,
    getName:()=>{
        return 'my full name is ${person.first_name} $ {person.last_name}'
    }
}
console.log(person.age);