'use strict';

$(function(){

    var divBase = $("#base");
    var divButton = [];
    for(var cnt= 0;cnt<=4;cnt ++){
     divButton2[cnt] = $("<div>", { "id": "button2" + cnt, "class": "button2","height":"button2","width":"button2"});
    divButton2[cnt].text(cnt);
    }
    
    var divButton2 = $("<div>", { "id": "button2", "class": "button2","height":"button2","width":"button2"});
    divButton2.text('SMALL BOX');
    
    var divButton3 = $("<div>", { "id": "button3", "class": "button3","height":"button3","width":"button"});
    divButton3.text('kume sensei');
    
    var divButton4 = $("<div>", { "id": "button4", "class": "button4","height":"button4","width":"button4"});
    divButton4.text('okubo sensei');
    
    var divButton5 = $("<div>", { "id": "button5", "class": "button5","height":"button5","width":"button5"});
    divButton5.text('watanabe sensei');

 

    divBase.append(divButton);
    divBase.append(divButton2);
    divBase.append(divButton3);
    divBase.append(divButton4);
    divBase.append(divButton5);

    divButton.on('click', function(){
        
    divButton.css({"background-color": "#ff0000" ,
                   "color": "#0000ff" });
                       
    });
    
    divButton2.on('click', function(){
    divButton2.css({"background-color": "#ff0000" ,
                   "color": "#0000ff" });
    divButton2.css({"height":"50"});
    divButton2.css({"width":"50"});
                  
    });
    divButton3.on('click', function(){
    divButton3.css({"background-color": "#f00000" ,
                   "color": "#ff00ff" });
    divButton3.css({"height":"50"});
    divButton3.css({"width":"50"});
                  
    });
    divButton4.on('click', function(){
    divButton4.css({"background-color": "#ff0000" ,
                   "color": "#0000ff" });
    divButton4.css({"height":"50"});
    divButton4.css({"width":"50"});
                  
                       
    });
    divButton5.on('click', function(){
    divButton5.css({"background-color": "#ff0000" ,
                   "color": "#0000ff" });
    divButton5.css({"height":"50"});
    divButton5.css({"width":"50"});
                  
                       
    });
                        
                     
                        
                        
     
});
