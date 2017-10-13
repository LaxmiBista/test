'use strict';
	var out_string = 0;	
	for (var count = 1; count <= 60; count++){	
		out_string=	count ;
		
	    if((count % 3 === 0 )&&(count% 5 === 0 )){
		    out_string = out_string+"->fizz buzz";
		}
        else if(count % 3  === 0){
		   out_string = out_string+"->fizz";
		   
		}
	    else if(count % 5 === 0){
		    out_string = out_string+"->buzz";
		}
	    else{
		     out_string = out_string+"->" + count;	
		}
	    console.log(out_string);
	 }


    
    
    
    
