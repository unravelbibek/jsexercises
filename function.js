/* write a function that take no of bottles as a input and alert some task to purchase 
same no of bottles of milk and alerts the bill in Rupees if price of per bottle of milk is rs 14*/

function buyMilk(bottles) {
    alert("Leave house");
    alert("go to grocery");
    alert("Buy milk");
    alert("Milk Purchased");
    alert("Return house");
    alert(" Knock Knock ");
    alert(" Who ? ");
    alert(" Milk Man ");
    alert(" Milk man who?");
    alert(" The man you just told to purchase"+ " "+ bottles + " bottles of milk ");}
    
    
    var bottles = parseInt(prompt("Enter bottle of milk you want to purchase"));
    buyMilk(bottles);
    var costPerMilk = 12;
    alert("your bill is RS" + bottles*costPerMilk);

    /* lame question lame solution don't mind me */