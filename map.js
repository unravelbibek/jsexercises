var num = [1,2,3,4,5,6]
// map function is used to transform the whole array


function double(x){
    return x*2;
}

function triple(x){
    return x*3;
}

function binary(x){
    return x.toString(2)
}


var doubleOfNum = num.map(double);
console.log(doubleOfNum)

// [ 2, 4, 6, 8, 10, 12 ]




// basically map function takes function as a parameter that does something for any array passed to instanceof.