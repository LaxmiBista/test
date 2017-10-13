'use strict';

$(function(){
    var sign = $('#sign');
    var param = $('#param');
    var calc = $('#calc');
    var result = $('#result');
    var clear = $('#clear');

    sign.on('click', function () {
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

    param.on('click', function () {
        
        if (Number($(this).text()) <20 || Number($(this).text()) >= 30) {
            $(this).text(Number($(this).text()) + 2);
        }
        else {
            $(this).text('30');
        }
        
    });

    calc.on('click', function () {
        
        var val = 0;
        
        if (sign.text() === '+') {
            val = Number(param.text());
        } else {
            val = Number(param.text()) * -1;
        }
        
        result.text(val * 3);
    });

    clear.on('click', function () {
        sign.text('+');
        param.text('0');
        result.text('0');
    });
});
