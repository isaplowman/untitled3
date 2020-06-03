
//problem 32
function prime_position(int){
    var arr = [];
    var numbie = 0;
    var p = 0;

    while(arr.length < int){
        numbie = numbie + 1;

        if(numbie < 2){
            p = 2;
        }

        for(var i = 2; i <= Math.sqrt(numbie); i++){
            if(numbie % i == 0){
                p = p+1;
            }

            if(p >= 1){
                break;
            }

        }
        if(p <= 0){
            arr.push(numbie);
        }

        p = 0;

    }

    return arr[int-1];
}




//last problem 33!

function sort_subtract(int){
    str = String(int);
    firstStr = "";
    secStr = "";
    arr = [];

    for( var i = 1; i<str.length+1; i ++){
        arr.push(str.substring(i-1,i));
    }

    arr.sort((a,b) => a-b);

    for( var a = 0; a<arr.length; a++){
        firstStr += arr[a];
    }

    for( b = arr.length-1; b >= 0; b--){
        secStr += arr[b];
    }


    var f = parseInt(firstStr, 10);
    var s = parseInt(secStr, 10);


    var diff = s-f;
    return diff;

}