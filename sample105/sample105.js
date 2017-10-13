'use strict';
var total = 0;
var total_next = 0;
var i = 0;
do {
    total_next = total + i;
    console.log( total + "+" + i + "=" + total_next);

    total = total_next;
    i += 1;

} while ((total_next + i) < 50);
    

