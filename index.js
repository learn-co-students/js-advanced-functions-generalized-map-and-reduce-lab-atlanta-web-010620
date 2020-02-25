function map(array,fun){
    let newArray = [];
    array.forEach(function(e){
        newArray.push(fun(e))
    })
    return newArray;
}

function reduce(array, fun, startingValue){
    // let r = (!!starting) ? starting : src[0]
    // let i = (!!starting) ? 0 : 1
    let total, iterator; 
    if (startingValue){
        total = startingValue;
        iterator = 0; 
    }else{
        total = array[0];
        iterator = 1;
    }
    for (iterator;iterator<array.length;iterator++){
        total = fun(array[iterator],total);
    }
    // array.forEach(function(num){
    //     total = fun(num,total);        
    // })
    return total;
    
}