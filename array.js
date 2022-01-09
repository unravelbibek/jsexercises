var eggs = ["egg1" , "egg2", "egg3", "egg4"]
// console.log(eggs.length);
// console.log(eggs[1]);


// search input of a user from above arrays using control statement and log and alert two different message.
var eggSearch = prompt("please enter the word to search in an array")
if (eggs.includes(eggSearch)){
    console.log("yeah we found it");
    alert("yeah we found it");

}else {
 console.log("doesn\'t match any search");
 alert("doesn\'t match any search");
}