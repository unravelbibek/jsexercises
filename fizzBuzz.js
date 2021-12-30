/*Question 2. 

Write a program that uses console.log to print all the numbers from 1 to 100,
with two exceptions. For numbers divisible by 3, print "Fizz" instead of the
number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.
When you have that working, modify your program to print "FizzBuzz" for
numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz"
for numbers divisible by only one of those).

*/

// Fizzbuzz using for loop

for (var n = 1; n <= 100; n++) {
    var output = "";
    if (n % 3 == 0)
      output += "Fizz";
    if (n % 5 == 0)
      output += "Buzz";
    console.log(output || n);
  }


// fizzbuzz using Switch

    let Fizz = false;
    let Buzz = false;
    for (let i = 1; i <= 100; i++) {
        Fizz = i % 3 == 0;
        Buzz = i % 5 == 0;
        switch (true) {
            case Fizz && Buzz: {
                console.log('FizzBuzz');
                break;
            }
            case Fizz: {
                console.log('Fizz');
                break;
            }
            case Buzz: {
                console.log('Buzz');
                break;
            }
            default: {
                console.log(i);
                break;}}}