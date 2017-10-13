//=============================================================================
// [file]test3.js
// [memo]
//=============================================================================
(function () {

     'use strict';

    // =============================================
    // EVENT:edit.show
    // =============================================
    kintone.events.on('app.record.detail.show', function(event) {
        
        alert('laxmi+naresh');

    }); // end kintone.events.on [app.record.edit.show]

})();
