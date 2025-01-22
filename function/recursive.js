function factorial(a){
    if(a===0){
        return true
    }else{
        return a * factorial(a-1)
    }
}
console.log(factorial(5)) // 5*4*3*2*1
