/**
 * 
 */
$(document).ready(function(){
	$("#btn").click(function(){
	  
	  var mname = $("#t1").val();
	  
		$.ajax({
			
			type:"GET",
			url:"http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=bzm7bkpkkm4wghg22xdbx4vy&q=" +mname,
			dataType:"jsonp",
		
		   success: function(response){
			   
			   $("#show").html("Total: "+response.total+"<br>");
			   
			   $("#tid").css("visibility","visible");
			   
			   for(var i = 0;i<response.movies.length;i++){
				   var row = $("<tr />");
				   $("#tid").append(row);
				  row.append("<td>"+response.movies[i].year+"</td>") ;
				  row.append("<td>"+response.movies[i].title+"</td>");
				  row.append("<td>"+response.movies[i].ratings.critics_score+"</td>");
				  row.append("<td>"+response.movies[i].ratings.audience_score+"</td>"); 
			   

			   
		   },
		   error:function(){
			   
		   }
			
		});
		
	});
});