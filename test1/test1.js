'use strict';
$(function(){

    var divBtn1 = $('#btn1');
    var divBtn2 = $('#btn2');
    var divBox = $('#box');
    var divBtn3 = $('#btn3');
   
    
    divBtn1.on('click', function () {
        divBox.removeClass();
        divBox.addClass('box_small');
    });
    divBtn2.on('click', function () {
        divBox.removeClass();
        divBox.addClass('box_medium');
    });
 divBtn3.on('click', function () {
        divBox.removeClass();
        divBox.addClass('box_large');
    });
   
                        
                        
     
});
