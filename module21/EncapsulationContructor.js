function createCounter(){
    let count=0

    this.increment=()=>{
        count++
    }
    this.decrement=()=>{
        count--
    }
    this.getCount=()=>{
       return count
    }
}

let Counter=new createCounter()
Counter.increment()
Counter.increment()
Counter.increment()
Counter.increment()
Counter.decrement()
console.log(Counter.getCount())