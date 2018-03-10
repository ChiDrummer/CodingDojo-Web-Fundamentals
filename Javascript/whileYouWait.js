/*For every day, print how many days left.

If it's more than 30 days, print a sad message.

If it's less than 30 days, print a message that sounds excited!

If it's less than 5 days, SCREAM IT!

ONCE IT'S YOUR BIRTHDAY, HAVE A PARTY!*/

var num = 60

while(num <= 60 && num >= 0){
    if(num >=30){
        console.log(num + " long days left");
    }
    if(num < 30 && num > 5){
        console.log(num + " days colser!");
    }
    if(num <= 5){
        console.log(num + "DAYS LEFT!");
    }
    num = num - 1;
}
console.log("its my Birthday");


