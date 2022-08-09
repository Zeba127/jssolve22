const shopping =[
    {name:'shows',price:200},
    {name:'Bag',price:300},
]

function shoppingCart(products){
    let sum = 0;
    for(let i=0;i<products.length;i++){
        const totalPrice = products[i];
        sum =sum + totalPrice.price;
       

    }
    return sum;
}

const myShopping = shoppingCart(shopping);
console.log(myShopping);