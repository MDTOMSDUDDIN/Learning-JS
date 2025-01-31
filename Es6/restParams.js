
function Rest(...number){
    let sum=0;

    for(let i of number){
        sum+=i;
    }
    console.log("sum of ="+sum)
}

Rest(12,23,4,2);