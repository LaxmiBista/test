'use strict';

var ARY = [5,20,80,18,19,25,3,55,14,8];

ARY = ARY.sort(function(a,b){
    return b - a;
});
console.log(ARY);