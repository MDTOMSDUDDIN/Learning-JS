
class createCounter{
    #count=0

    increment(){
        this.#count++
    }

    decrement(){
        this.#count--
    }

    getCount(){
       return this.#count
    }
}

let Obj=new createCounter()
Obj.increment()
Obj.increment()
Obj.increment()
Obj.decrement()
console.log(Obj.getCount())