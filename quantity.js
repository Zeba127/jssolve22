const shopping =[
    {name:'shows',price:200,quantity:2},
    {name:'Bag',price:300,quantity:3},
]

function shoppingCart(products){
    let sum = 0;
    for(let i=0;i<products.length;i++){
        const product = products[i];
        const totalProduct = product.price * product.quantity;
        sum = sum + totalProduct;
        
       

    }
    return sum;
}

const myShopping = shoppingCart(shopping);
console.log(myShopping);