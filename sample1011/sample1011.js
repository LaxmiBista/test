'use strict';
var num = [5, 20, 80, 18, 19, 25, 3, 55, 14, 8];
var min = num[0];
var max =num [0];
for(var i = 0; i < num.length; i++){
    if(min > num [i]){
        min = num [i];
    }
    if(max < num [i]){
        max = num [i];
    }
}
console.log(min);
console.log(max);

