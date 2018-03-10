// Original Code
function fancyArr(arr){
    for(var i = 0; i < arr.length; i ++){
        console.log(i + " -> " + arr[i]);
    }
    
}
fancyArr([ "James", "Jill", "Jane", "Jack" ]);

// Let the user pass a symbol **NOT WORKING
function fancyArr(arr, y, z){
    var symbol = y;
    var reverse = z;
    var newArr = [];

    if(z !== "true"){
        for(var i = 0; i < arr.length; i ++){
            console.log(i + " "+ y + " " + arr[i]);
        }
    }
    else{
        for(var i = arr.length - 1; i >=0; i --){
            newArr.push(arr[i]);
        }
        console.log(newArr[i]);
    }
}
fancyArr([ "James", "Jill", "Jane", "Jack" ], "----", "true");

