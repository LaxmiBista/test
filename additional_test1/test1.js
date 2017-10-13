'use strict';

$(function(){

    $('#btn').on('click', function () {
        
        switch ($(this).text()) {
            case 'Click to Green!':
                $(this).text('Click to Blue!');
                $(this).css({'background-color': '#00FF00'})
                break;
            case 'Click to Blue!':
                $(this).text('Click to Red!');
                $(this).css({'background-color': '#0000FF'})
                break;
            case 'Click to Red!':
                $(this).text('Click to Green!');
                $(this).css({'background-color': '#FF0000'})
                break;
            default:
                $(this).text('Click to Green!');
                $(this).css({'background-color': '#00FF00'})
                break;
        }

    });

});