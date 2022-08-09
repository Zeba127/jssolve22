function wood(chairQuantity,tableQuantity,bedQuantity){
     const perChairWood = 3;
     const perTableWood = 6;
     const perBedWood = 9;

     const chair = perChairWood * chairQuantity;
     const table = perTableWood * tableQuantity;
     const bed = perBedWood * bedQuantity;
    //  console.log(chair,table,bed);

     const totalWood = chair + table + bed;
     return totalWood;

}

const woodAmount = wood(2,4,8);
console.log(woodAmount);
