// var a= [1,2,3,4,5]
// var b= []
//  for( let i= a.length-1 ; i >= 0; i-- ){
//      b.push(a[i])
//  }
//  console.log(b);


// swap arr

 function reverseArrayInPlace(arr){
    for(let start = 0, end = arr.length-1 ; end > start ; start++, end-- ){
       [arr[start], arr[end]] = [arr[end],arr[start]]
    }
 }

var hello = [1,2,3]

reverseArrayInPlace(hello)
console.log(hello)