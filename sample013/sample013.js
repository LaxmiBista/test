
$(function(){
    var divBtn1 = $('#btn1');
    var divBtn2 = $('#btn2');
    var divBtn3 = $('#btn3');
    var divDisplay1 = $('#display1');
    var divDisplay2 = $('#display2');
    

    divBtn3.on('click', function () {
         var val1 = divBtn1.text();
        alert(val1);
        
        var val2 = divBtn2.text();
       
        
        divDisplay1.text(Number(val1) + Number(val2));
        divDsplay2.text(val1 + val2);
        
    });    
    
 
    
    
});