/**
 * 
 */
$(document).ready(function(){
	$("#btn").click(function(){
		var text = $("#t1").val();
		
	$.ajax({
		    
		    type:"GET",
		    url:"../JSON/Students.json",
		    dataType:"json",
		    success: function(response){
		    	//alert(response[0].name);
		    	var count = 0;
		    	for(var i = 0;i<response.length;i++){
		    		
		    		if(text == response[i].name){
		    			
		    			alert("Search Successful");
		    			$("#show").html(response[i].name);
		    			$("#show1").html(response[i].country);
		    			$("#show2").html(response[i].age);
		    			break;
		    		}
		    		
		    		else{
		    			
		    			count = 1;
		    			
		    		}
		    	  }
		    	if(count==1){
		    		alert("Not successful");
		    	}
		    	
		       },
		       error:function(){
		    	   alert("Error");
		       }
		
	      });
	  });
  });