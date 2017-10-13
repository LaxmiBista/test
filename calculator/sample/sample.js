'use strict';

$(function(){

    // ---------------------------
    // DOM
    // ---------------------------
    // ---- JSが読み込まれた時、1回だけ実行
    var divBase = $("#base");

    var divButton = $("<div>", { "id": "button", "class": "button"});
    divButton.text('kume sennsei');

    divBase.append(divButton);
    
    var clickCount = 0; 

    // ---------------------------
    // EVENT
    // ---------------------------
    divButton.on('click', function(){
        // ---- クリックされるたびに、何回でも実行
        clickCount = clickCount + 1;
        
        divButton.text(  clickCount);

        if (clickCount == 1) {
            divButton.css({"background-color": "#0000ff"});
        } else if (clickCount == 2) {
            divButton.css({"background-color": "#00ff00"});
        } else {
            divButton.css({"background-color": "#ff0000"});
            clickCount = 0;
        }
    });
    
});
