/* Write a program that creates a string that represents an 8×8 grid, using newline
characters to separate lines. At each position of the grid there is either a space
or a "#" character. The characters should form a chessboard.
Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 

*/
var hash = '# # # #'
for ( var i=0 ; i < 8 ; i++ ){
    if (i % 2 !=0 ) console.log(' '+hash)
    else console.log(hash)
}

