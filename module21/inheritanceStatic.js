class father{
    static  greetParent(){
       return 'i am parent method'
    }
  }

class Son extends father{
    static  greetSon(){
        return 'i am child method'
     }
}

console.log(Son.greetSon())