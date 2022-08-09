//if ticket number is less then 100,per ticket price 100;
//if ticket number is more than 100,bt less than 200.1st 100 ticket will be 100tk/rest of ticket will be 90tk per ..
//if you take more than 200 ,
  //1st 100 = 100tk,
  //101-200 =90tk,
  //200+ = 70tk,


function ticketPrice(number) {
    const ticket1st100 = 100;
    const ticket2nd100 = 90;
    const ticket3rd100 = 100;
   if(number <= 100){
    const price = number * ticket1st100;
    return price;
   }
   else if(number<=200){
    const   first100price = 100 * ticket1st100;
    const restOfTicket = number - 100;
    const restOfPrice = ticket2nd100 * restOfTicket;
    const totalPrice = first100price + restOfPrice;
    return totalPrice;
   }
   else{
    const first100price =100 * ticket1st100;
    const second100price = 100 * ticket2nd100;
    const restOfTicket = number - 200;
    const restOfPrice = ticket3rd100 * restOfTicket
    const totalPrice = first100price + second100price + restOfPrice;
    return totalPrice;
   }

}

const price = ticketPrice(220);
console.log(price);

