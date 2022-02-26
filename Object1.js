function range(start,end){
    let store = [];
    for(let i= start; i <= end; i++){
        store.push(i);
    }
    return store;
}

function sum(arr){
    let total = 0
    for(let i=0; i< arr.length; i++){
        total+= arr[i]
    }
    return total;
} 

console.log(sum(range(1,10)));