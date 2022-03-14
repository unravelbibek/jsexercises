// reduce function basically returns a single value iterating over an array
// so let's take an example.

var cool = [1,2,3,4,5,6]

output = cool.reduce(function(init,current){   // reduce function take 2 parameter i.e. function and value for accumulator 
    if (init < current){ // if initial or accumulator is smaller than current value
        init = current // assign current value to init 
        
    }
    return init   // return init
},0) // this 0 is the initial value for init or accumulator of a reduce function

console.log(output)

// this is a reduce function to get the largest value from an array let's understand.
