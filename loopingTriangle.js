/* Question 1. 

Write a loop that makes seven calls to console.log to output the following
triangle:
#
##
###
####
#####
######
#######

*/



// Using For loop 

for( var line = "#"; line.length < 8 ; line+='#'){
    
    console.log(line);
}


// Using While loop 
var line = "#";
while( line.length < 8 ){
    line+="#";
    console.log(line);
}


// Things to learn from this program.

// 1)  .length gives length of any parameter or varriable passed 


let abc = "abc";
console.log(abc.length);