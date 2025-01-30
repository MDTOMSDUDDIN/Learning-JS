// ---constructor inside only parent class 

// class father{
//    constructor(){
//     console.log('i am constructor for father class')
//    }
// }

// class Son extends father{

// }
// new Son()


// ---constructor inside only parent class pass parametters
// class father{
//    constructor(msg){
//     console.log(msg)
//    }
// }

// class Son extends father{

// }


// new Son("this is constructor params form son")
// new father("this is constructor params form father")


// ---constructor inside only child class 
// class father{
 
// }

// class Son extends father{
//     constructor(){
//         super()
//         console.log('i am constructor for father class')
//        }
// }
// new Son()


// ---constructor inside only child class pass parametters
// class father{
 
// }

// class Son extends father{
//     constructor(msg){
//         super()
//         console.log(msg)
//        }
// }
// new Son('i am constructor for father class')

// ---constructor inside Both child class & parent class
// class father{
//     constructor(){
//         console.log('i am constructor for child class')
//        }
// }

// class Son extends father{
//     constructor(){
//         super()
//         console.log('i am constructor for father class')
//        }
// }
// new Son()


// ---constructor inside Both child class & parent class
class father{
    constructor(msg_father){
        console.log(msg_father)
       }
}

class Son extends father{
    constructor(msg_son){
        super()
        console.log(msg_son)
       }
}
new father("msg father constructor pass params ")
// new Son("msg son constructor pass params ")