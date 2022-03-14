// filter function is used to filter the give array and only grab the array of element that matched the condition.

var num = [1,2,3,4,5,6]


function isOdd(x){
    return x%2 == 1;

}
var oddElement = num.filter(isOdd);
console.log(oddElement);