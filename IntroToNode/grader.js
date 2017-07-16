function average(arr){
    var sum = 0;
    // var size = arr.length;
    // for(var i = 0; i<size; i++){
    //     sum+=arr[i];
    // }
    // return Math.round(sum / size);
    //using for each
    
    arr.forEach(function(arr){
        sum+=arr;
    });
    return Math.round(sum/arr.length);
}


var scores = [10,20,30,40,50,60,70,80,90];
console.log(average(scores));

var scores2 = [40, 65, 77, 82, 80, 54, 73, 63, 95, 49];
console.log(average(scores2));