'use strict';

$(function(){
    var divBtn1 = $('#btn1');
    var divBox1 = $('#box1');
    
    divBtn1.on('click', function () {
        divBox1.removeClass();
        divBox1.addClass('box_red');
    });

});
