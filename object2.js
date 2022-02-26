function range(start,end,step =1){
    let store = [];
    for(let i= start; (end>start)? i <= end : i>= end ; i+=step){
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

console.log(range(10,5,-1));
