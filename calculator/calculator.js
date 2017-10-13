'use strict';

$(function(){
    // // ---------------------------
    // // DEFINE
    // // ---------------------------
    // var dispParamA = '';
    // var dispParamB = '';
    // var dispOpe = '';
    // var dispAns = '';
    
    // var paramA = 0;
    // var paramB = 0;
    
    // var ans = 0;


    
    var $divCalcPos = $("#calc");
   
    
    var $divBtn7= $("<div>", {"id":"btn7", "class": "btn7"});
     $divBtn7.text('7');

    var $divBtn8 = $("<div>", {"id": "btn8", "class": "btn8"});
    $divBtn8.text('8');
    
    var $divBtn9 = $("<div>", {"id": "btn9", "class": "btn9"});
    $divBtn9.text('9');
    
    var $divBtnDot  = $("<div>", {"id": "btnDot", "class": "btnDot"});
    $divBtnDot.text('.');
    
    var $divBtnPDM = $("<div>", {"id": "btnpdm", "class": "btnpdm"});
    $divBtnPDM.text('+/-');
    
    var $divBtnBS = $("<div>", {"id": "btnBS", "class": "btnBS"});
    $divBtnBS.text('BS');
    
    var $divBtnCE = $("<div>", {"id": "btnCE", "class": "btnBS"});
    $divBtnCE.text('CE');
    
    var $divBtnAc = $("<div>", {"id": "btnAC", "class" :"btnAC"});
  
    $divBtnAc.text('AC');
    
    var $divBtn4 = $("<div>", {"id": "btn4", "class": "btn4"});
    $divBtn4.text('4');
    
    var $divBtn5 = $("<div>", {"id": "btn5", "class": "btn5"});
    $divBtn5.text('5');
    
    var $divBtn6 = $("<div>", {"id": "btn6", "class": "btn6"});
    $divBtn6.text('6');
    
    var $divBtn0 = $("<div>", {"id": "btn0", "class": "btn0"});
    $divBtn0.text('0');
    
    var $divBtnPlush = $("<div>", {"id": "btnplush", "class": "btnplush"});
    $divBtnPlush.text('+');
    
    var $divBtnM = $("<div>", {"id": "btnM", "class": "btnM"});
    $divBtnM.text('-');
    
    var $divBtnMt= $("<div>", {"id": "btnmt", "class": "btnmt"});
    $divBtnMt.text('*');
    
    var $divBtnD = $("<div>", {"id": "btnd", "class": "btnd"});
    $divBtnD.text('/');
    
    var $divBtn1 = $("<div>", {"id": "btn1", "class": "btn1"});
    $divBtn1.text('1');
    
    var $divBtn2= $("<div>", {"id": "btn2", "class": "btn2"});
    $divBtn2.text('2');
    
    var $divBtn3 = $("<div>", {"id": "btn3", "class": "btn3"});
    $divBtn3.text('3');
    
    var $divBtn000 = $("<div>", {"id": "btn000", "class": "btn000"});
    $divBtn000.text('000');
    
    var $divBtnE = $("<div>", {"id": "btne", "class": "btne"});
    $divBtnE.text('=');
    
    
    var $divBtnD1 = $("<div>", { "id": "btnd1", "class": "btnd1"});
    $divBtnD1.text('btnd1');
    
    
    
    
    $divCalcPos.append($divBtn7);
    $divCalcPos.append($divBtn8);
    $divCalcPos.append($divBtn9);
    $divCalcPos.append($divBtnDot);
    $divCalcPos.append($divBtnPDM);
    $divCalcPos.append($divBtnBS);
    $divCalcPos.append($divBtnCE);
    $divCalcPos.append($divBtnAc);
    $divCalcPos.append($divBtn4);
    $divCalcPos.append($divBtn5);
    $divCalcPos.append($divBtn6);
    $divCalcPos.append($divBtn0);
    $divCalcPos.append($divBtnPlush);
    $divCalcPos.append($divBtnM);
    $divCalcPos.append($divBtnMt);
    $divCalcPos.append($divBtnD);
    $divCalcPos.append($divBtn1);
    $divCalcPos.append($divBtn2);
    $divCalcPos.append($divBtn3);
    $divCalcPos.append($divBtn000);
    $divCalcPos.append($divBtnE);
    $divCalcPos.append($divBtnD1);
    
     $divBtn7.on('click', function(){
        alert('hogehoge');
    });
    var msg = '';
    var num1 = 0;
    var num2 = 0;
    var ans = 0;
    var check = false;
    var current = '';
    var sign = '';
    $divBtn7.on('click', function(){
      
      
        msg += '7';
        
         current += '7';
        if (check == false) {
         num1 = Number(current);
        }
        else {
         num2 = Number(current);
        }

        $divBtnD1.text(msg);
     });
    $divBtn8.on('click', function(){
      
        msg+='8';
        
         current += '8';
        if (check == false) {
         num1 = Number(current);
        }
        else {
         num2 = Number(current);
        }
        $divBtnD1.text(msg);
    });
    $divBtn9.on('click', function(){
         msg+='9';
          current += '9';
        if (check == false) {
         num1 = Number(current);
        }
        else {
         num2 = Number(current);
        }
        $divBtnD1.text(msg);
    });
    $divBtnDot.on('click', function(){
        msg+='.';
        $divBtnD1.text(msg);
    });
      $divBtnPDM.on('click', function(){
         msg+='+/-';
        $divBtnD1.text(msg);
    });
      $divBtnBS.on('click', function(){
        msg+='BS';
        msg='0';
        num1=0;
        num2=0;
        check=true;
        current='1';
        
        $divBtnD1.text(msg);
    });
     $divBtnCE.on('click', function(){
        //msg+='CE';
        //msg=0;
        // num1=1;
        // num2='';
        if (num2 != 0) {
         num2 = 0;
         msg = num1.toString() + sign;
        } else {
         num1 = 0;
         sign = '';
         msg = '';
        }
        
        
        $divBtnD1.text(msg);
    });
     $divBtn0.on('click', function(){
        msg='0';
        num1=0;
        num2=0;
        check=false;
        current='';
        $divBtnD1.text(msg);
    });
     $divBtn4.on('click', function(){
        msg+='4';
         current += '4';
        if (check == false) {
         num1 = Number(current);
        }
        else {
         num2 = Number(current);
        }
        $divBtnD1.text(msg);
    });
     $divBtn5.on('click', function(){
        msg+='5';
        current += '5';
        if (check == false) {
         num1 = Number(current);
        }
        else {
         num2 = Number(current);
        }
        $divBtnD1.text(msg);
    });
     $divBtn6.on('click', function(){
        msg+='6';
        current += '6';
        if (check == false) {
         num1 = Number(current);
        }
        else {
         num2 = Number(current);
        }
        $divBtnD1.text(msg);
    });
     $divBtn0.on('click', function(){
        msg+='0';
         current += '0';
        if (check == false) {
         num1 = Number(current);
        }
        else {
         num2 = Number(current);
        }
        $divBtnD1.text(msg);
    });
     $divBtnPlush.on('click', function(){
        msg+='+';
        check = true;
        current = '';
        sign = '+';
        $divBtnD1.text(msg);
    });
     $divBtnM.on('click', function(){
        msg+='-';
        check = true;
        current = '';
        sign = '-';
        $divBtnD1.text(msg);
    });
     $divBtnM.on('click', function(){
        msg+='*';
        check = true;
        current = '';
        sign = '*';
        $divBtnD1.text(msg);
    });
     $divBtnD.on('click', function(){
        msg+='/';
        check = true;
        current = '';
        sign = '/';
        $divBtnD1.text(msg);
    });
     $divBtn1.on('click', function(){
        msg+='1';
    
         current += '1';
        if (check == false) {
         num1 = Number(current);
        }
        else {
         num2 = Number(current);
        }
        $divBtnD1.text(msg);
    });
     $divBtn2.on('click', function(){
        msg+='2';
         current += '2';
        if (check == false) {
         num1 = Number(current);
        }
        else {
         num2 = Number(current);
        }
        $divBtnD1.text(msg);
    });
     $divBtn3.on('click', function(){
        msg+='3';
         current += '3';
        if (check == false) {
         num1 = Number(current);
        }
        else {
         num2 = Number(current);
        }
        $divBtnD1.text(msg);
    });
     $divBtn000.on('click', function(){
        msg+='000';
         current += '000';
        if (check == false) {
         num1 = Number(current);
        }
        else {
         num2 = Number(current);
        }
        $divBtnD1.text(msg);
    });
     $divBtnE.on('click', function(){
      if (sign == '+') {
        ans = num1 + num2;
      }
      else if (sign == '-') {
       ans = num1-num2;
      }
      else if(sign == '/'){
       ans = num1/num2;
      }
      else if(sign == '*'){
       ans = num1*num2;
      }
      else {
       ans = num1;
      }
       sign  = '';
        msg = ans.toString();
        num1 = Number(ans);
        current = msg;
        check = false;
        num2 = 0;
        $divBtnD1.text(msg);
    });
    
    // $divparam7.on('click,function')
    // $divparam8.on('click,function')
    
    //    $divParamA.on('click', function(){
        
    //     // for display
    //     dispParamA = $('#sample1').text();
        
    //     dispAns += dispParamA;
        
    //     $divBtnD1.text(dispAns);

    //     // for calculate
    //     paramA = Number(dispParamA);
    // });
    
    // $divParamB.on('click', function(){
        
    //     // for display
    //     dispParamB = $('#sample2').text();
        
    //     dispAns += dispParamB;
        
    //     $divBtnD1.text(dispAns);
        
    //     // for calculate
    //     paramB = Number(dispParamB);
    // });

    // $divBtn1.on('click', function(){
        
    //     // for display
    //     dispOpe = $('#sample13').text();
        
    //      dispAns += dispParamB;

    //     $divBtnD1.text(dispAns);
    // });

    // $divBtn21.on('click', function(){
        
    //     // for calculate
    //     ans = paramA + paramB;
        
    //     $divBtnD1.text(ans);
    //  });

         
 });
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    



