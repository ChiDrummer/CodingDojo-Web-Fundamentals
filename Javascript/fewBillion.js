/*There is an old tale about a king who offered a servant $10,000 as a reward. The servant instead asked that for 30 days he be given an amount that would double, starting with a penny. (1 penny for the first day, 2 for the second, 4 for the third, then 8, 16, 32 pennies, and so on).

Use for loops to answer the following:

How much was the reward after 30 days?
remember, a penny isn't 1, but 0.01

Bonus (Only If You Have Time):

How many days would it take the servant to make $10,000?
How about 1 billion?*/

var sum = .01;
var counter = 0;

for(var i = 0; i < 31; i++){
    sum = sum * 2;
    if(sum < 1000000000){
        counter = counter + 1;  
    }
}
console.log(counter);
console.log(sum);
