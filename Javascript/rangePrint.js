// user omits skip variable 
function printRange(x, y, z){
    var start = x;
    var stop = y;
    var skip = z;

    for(var i = start; i < stop; i += skip){
        if(skip == null){
            skip = 1;
        }
       console.log(i);
    }
}
printRange(2,10);

// user only passes one variable 
function printRange(start, stop, skip){
    
    if(skip == null){
       skip = 1;
    }
    if(stop == null){
        stop = start;
        start = 0;
    }
    
    for(var i = start; i < stop; i += skip){
        
        console.log(i);
    }
    
}
printRange(10);



// original function 
function printRange(x, y, z){
    var start = x;
    var stop = y;
    var skip = z;

    for(var i = start; i < stop; i += skip){
       console.log(i);
    }
}
printRange(2,10,2);
