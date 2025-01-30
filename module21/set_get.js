class product{
    set setPrice(value){
        this.price=value;
    }

    get getPrice(){
        return this.price;
    }

}

let productobj=new product();
productobj.setPrice=100;
console.log(productobj.getPrice);