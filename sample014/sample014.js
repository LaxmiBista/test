'use strict';

$(function(){
    var param1 = $('#param1');
    var param2 = $('#param2');
    var ope = $('#ope');
    
    var result = $('#result');
    var clear = $('#clear');

    ope.on('click', function () {
        switch ($(this).text()) {
            case '+':
                $(this).text('-');
                break;
            case '-':
                $(this).text('+');
                break;
           
            default:
                $(this).text('+');
                break;
        }
    });

   

    clear.on('click', function () {
        result.text('push to calculate!');
    });

});
