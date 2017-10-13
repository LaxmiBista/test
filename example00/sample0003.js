'use strict';

$(function(){

    // ---------------------------
    // DOM
    // ---------------------------
    var divBase = $("#base");

    var divButton = $("<div>", { "id": "button", "class": "button"});
    divButton.text('CHANGE COLOR!');

    divBase.append(divButton);

    // ---------------------------
    // EVENT
    // ---------------------------
    divButton.on('click', function(){
        
        divButton.css({"background-color": "#0000ff" ,
                       "color" : "#00ffff"});
        // divButton.css({"color": "#00ffff"});
        
        
    });
    
    
});
