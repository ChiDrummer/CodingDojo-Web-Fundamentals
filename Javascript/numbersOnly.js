// original problem - return an array of only numbers
function numbersOnly(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i ++){
        if(typeof arr[i] == "number"){
            newArr.push(arr[i]);
        }
    }
    return newArr;
}
numbersOnly([2,4,"eric","orange",17,122,-3,"purple"]);

// bonus question - make function that REMOVES the numbers, return what sleft of the original array **NOT WORKING
function noNumbers(arr){
    for(var i = 0; i < arr.length; i++){
        if(typeof arr[i] !== "string"){
            arr.pop(arr[i]);
        }
    }
    return arr;
}
noNumbers([2,4,"eric","orange",17,122,-3]);

