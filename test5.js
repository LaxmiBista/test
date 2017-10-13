(function(){
    'use strict';
//    // ==========================================================
// EVENT:index.show
// ===============================================
kintone.events.on('app.record.index.show',function(event)){
    var record = event.records;
    // ----------------------------------------------
    // CREATE DOM
    // --------------------------------------------------
    var $indexHeader = $(kintone.app.getHeaderMenuSpaceElement());
    var $btnSample1 = $("<button>",{id: "btn_sample2"}).append(" button");
    $indexHeader.append($btnSample1);
    var  $btnArea = $('#btnArea');
    var $btnSample2=$("<button>",{id:"btn_Sample2"}).append(" button2");
    $btnArea.append($btnSample2);
    var $formArea = $('#formArea');
    var $textImput1 = $("<input>",{id:"txt_input1"});
    var $textInput2 = $("<input>",{id: "txt_input2"});
    $forMArea.append($textInput1);
    $forMArea.append($textInput2);
    // --------------------------------------------
    // EVENT HANDLER
    // --------------------------------------------
    $btnSample1.on('click',function(e){
        alert('clickbutton1!');
        
     })//end $btnSample1.onclick
     $btnSample2.on('click',function(e){
         var str = $('#txt_input1').val()+$('#txt_input2').val()
         alert('input data:'+ str);
        });//end $btnSample1.onclock
        return event;
        });
        })();