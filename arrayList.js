let arr = [1,2,3] ;

function arrayToList(arr){
    let list = {}
   list.value = arr.shift()
   list.rest = (arr.length > 0)? arrayToList(arr) : null

   return list;
}

let object1 = arrayToList(arr);


var newarray = []
function listToArray(object1){
    newarray.push(object1.value)
    if (object1.rest != null){
        listToArray(object1.rest)

    } 

    return newarray;
}

console.log(listToArray(object1));