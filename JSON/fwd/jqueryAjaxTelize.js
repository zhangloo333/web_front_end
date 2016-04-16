/**
 * 
 */
$(document).ready(function(){
	$("#btn").click(function(){
		
	$.ajax({
		  type:"GET",
		  url: "http://www.telize.com/geoip",
		  dataType:"json",
		  success:function(response){
			  var row = $("<tr />");
			    $("#tid").append(row);
			    row.append("<td>"+response.ip+"</td>");
			    row.append("<td>"+response.latitude+"</td>");
			    row.append("<td>"+response.longitude+"</td>");
			    row.append("<td>"+response.city+"</td>");
			    row.append("<td>"+response.country+"</td>");
			    row.append("<td>"+response.timezone+"</td>");
			    row.append("<td>"+response.region+"</td>");
			    row.append("<td>"+response.postal_code+"</td>");
				
		  },
		error:function(){
			
		}
		});
	});
});