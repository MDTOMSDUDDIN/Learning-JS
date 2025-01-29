let person=Object();
    
    person.first_name="tomas",
    person.last_name="uddin",
    person.age=19,
    person.city="dhaka",
    person.isBangladeshi=true,
    person.getName=()=>{
        return 'my full name is ${person.first_name} $ {person.last_name}'
    }
    console.log(person.getName());