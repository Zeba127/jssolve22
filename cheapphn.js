const phones =[
    { name: 'sumsung',camera: 12,storage:'32gb',price:20000,color:'silver'},
    { name: 'iphone',camera: 12,storage:'32gb',price:84000,color:'silver'},
    { name: 'xaomi',camera: 12,storage:'32gb',price:30000,color:'silver'},
    { name: 'oppo',camera: 12,storage:'32gb',price:13000,color:'silver'},
    { name: 'poco',camera: 12,storage:'32gb',price:60000,color:'silver'},
]

function cheapestPhone(phones){
     
    let cheapPest = phones[0];

    for (let i=0; i < phones.length; i++){
        const phone = phones[i];
        if(phone.price<cheapPest.price){
            cheapPest = phone;
        }

    }
    return cheapPest;
}

const myPhone = cheapestPhone(phones);
console.log(myPhone);