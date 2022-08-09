const names =['babul','abul','cabul','gobul','tabul','babul','abul','cabul','kabul','gobul','babul','abul']

function removeArray(names){
    const unique =[];
    for(var i=0;i<names.length;i++){
       const name = names[i];
       if(unique.includes(name)=== false){
        unique.push(name);
       }
    }
    return unique;
}

const uniquename = removeArray(names);
console.log(uniquename);