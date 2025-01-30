
function createCounter(){
    let count=0;
    return {
        increment:function(){
            count++
        },
        decrement:function(){
            count--
        },
        getCount:function(){
            return count
        }
    }
}

let Counter=new createCounter()
Counter.increment()
Counter.increment()
Counter.increment()
Counter.decrement()
console.log(Counter.getCount());